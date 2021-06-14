import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native'
import { AppText, Screen } from '../../components/common'
import DashboardHeader from '../../components/DashboardHeader'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; 
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FORM_SCREEN } from '../../constants/Screens';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SUBMIT_IMAGES } from '../../redux/actionTypes';
import Loader from '../../components/Loader';
import { checkIfLoading } from '../../redux/selectors';

// var ImageCropPicker = NativeModules.ImageCropPicker;
const ImagePickerScreen = props => {


  const dispatch = useDispatch()
  // const { id } = props?.route?.params?.id
  const id = 4
  const [state, setState] = useState({ id, selectedImage: [] })

  console.log(state, "THIS IS STATE")


  // const options = {
  //     title: 'Select Avatar',
  //     // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  //     storageOptions: {
  //         skipBackup: true,
  //         path: 'images/foodPandaApp',
  //     },
  // };

  var options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option'
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const selectFromGallery = props => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      multiple: true
    }).then(image => {
      setState({
        ...state, selectedImage: [...state.selectedImage, ...image]
      })
    });
    // launchImageLibrary(
    //     options, (response) => {
    //         console.log('Response = ', response);
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             setState({
    //                 ...state, selectedImage: [...state.selectedImage, { ...response }]
    //             })
    //         }
    //     }
    // )
  }
  const setImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true,
    }).then(image => {
      setState({
        ...state, selectedImage: [...state.selectedImage, { ...image }]
      })
    })

    // launchCamera(
    //     options, (response) => {
    //         console.log('Response = ', response);
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             setState({
    //                 ...state, selectedImage: [...state.selectedImage, { ...response }]
    //                 // ...state, selectedImage: [{ ...response }]

    //             })
    //             // setState({
    //             //     ...state, selectedImage: [...state.selectedImage, {
    //             //         uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
    //             //         type: response.type,
    //             //         name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
    //             //     }]
    //             // })
    //         }
    //     }
    // )

  };
  // const setImage = () => {
  //     ImagePicker.showImagePicker(options, (response) => {
  //         console.log('Response = ', response);
  //         if (response.fileSize > 5000000) {
  //             // return validateIsTrue(false, I18nManager.isRTL ? "الرجاء تحديد صورة أقل من 5 ميغا بايت" : "Please select a image less than 5MBs", false);
  //         }
  //         else if (response.didCancel) {
  //             console.log('User cancelled image picker');
  //         } else if (response.error) {
  //             console.log('ImagePicker Error: ', response.error);
  //         } else if (response.customButton) {
  //             console.log('User tapped custom button: ', response.customButton);
  //         } else {
  //             console.log(response, "image")
  //             // You can also display the image using data:
  //             // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  //             // console.log(response)
  //             // handleChange('image', {
  //             //   uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
  //             //   type: response.type,
  //             //   name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
  //             // });
  //         }
  //     });
  // };
  const deleteOldPhoto = id => {
    Alert.alert("Delete this photo", "Are you sure you want to delete this photo", [{
      text: 'Cancel',
      onPress: () => true,
      style: 'cancel',
    },
    {
      text: 'OK', onPress: () => {
        setState({ ...state, selectedImage: state.selectedImage.filter(image => image.path != id) })

      }
    },])
  }
  const { isLoading } = useSelector(state => (
    {

      isLoading: checkIfLoading(
        state,
        SUBMIT_IMAGES,
      )
    }
  ), shallowEqual);
  return (
    <Screen noPadding>
      <View key="header">
        <DashboardHeader
          title="Select Image"
          subTitle="Choose Multiple Images"
          {...props}
        />
      </View>
      <View key="content" style={styles.container}>
        <Loader loading={isLoading} />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              alignSelf: 'center',
              width: wp(90),
            }}>
            {state.selectedImage.length < 1 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  paddingVertical: hp(10),
                }}>
                <AppText size="16" bold>
                  No Photos Selected
                </AppText>
                <AppText size="16" bold>
                  Take or Upload Photo then press Submit
                </AppText>
              </View>
            )}
            {state.selectedImage.map(image => {
              return (
                <TouchableOpacity onLongPress={() => deleteOldPhoto(image.path)}>
                  <Image
                    source={{ uri: image.path }}
                    style={{ width: 90, height: 100, margin: hp(1) }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => selectFromGallery()}
            style={[styles.submitBtn]}>
            <AppText bold color="white" size="14">
              Open Gallery
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity onPress={setImage} style={[styles.submitBtn]}>
            <AppText bold color="white" size="14">
              Take a Photo
            </AppText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.submitBtn,
            {
              borderRadius: 5,
              width: wp(40),
              alignSelf: 'center',
              backgroundColor: 'white',
            },
          ]}
          onPress={() => dispatch({ type: SUBMIT_IMAGES, payload: { ...state } })}>
          <AppText color="black" size="18">
            Submit
          </AppText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(80),
  },
  btnContainer: {
    borderWidth: 0,
    flexDirection: 'row',
    margin: 0,
    justifyContent: 'center',
  },

  submitBtn: {
    margin: 5,
    width: wp(35),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
  },
});
export default ImagePickerScreen;
