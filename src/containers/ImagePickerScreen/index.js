import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native'
import { AppText, Screen } from '../../components/common'
import DashboardHeader from '../../components/DashboardHeader'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FORM_SCREEN } from '../../constants/Screens';

// var ImageCropPicker = NativeModules.ImageCropPicker;
const ImagePickerScreen = props => {

    const { id } = props.route.params.id

    const [state, setState] = useState({ id, selectedImage: [] })




    const options = {
        title: 'Select Avatar',
        // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: false,
            path: 'images',
        },
    };
    const selectFromGallery = props => {
        launchImageLibrary(
            options, (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    setState({
                        ...state, selectedImage: [...state.selectedImage, {
                            uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
                            type: response.type,
                            name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
                        }]
                    })
                }
            }
        )
    }
    const setImage = () => {
        launchCamera(
            options, (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    setState({
                        ...state, selectedImage: [...state.selectedImage, {
                            uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
                            type: response.type,
                            name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
                        }]
                    })
                }
            }
        )

    };

    const deleteOldPhoto = id => {
        Alert.alert("Delete this photo", "Are you sure you want to delete this photo", [{
            text: 'Cancel',
            onPress: () => true,
            style: 'cancel',
        },
        {
            text: 'OK', onPress: () => {
                setState({ ...state, selectedImage: state.selectedImage.filter(image => image.uri != id) })

            }
        },])
    }
    console.log(state)
    return (
        <Screen noPadding>
            <View key="header">
                <DashboardHeader title="Select Image" subTitle="Choose Multiple Images" {...props} />
            </View>
            <View key="content" style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center', width: wp(90) }}>
                        {state.selectedImage.length < 1 && <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingVertical: hp(10) }}>
                            <AppText size="16" bold color="rgb(50,50,100)">No Photos Selected</AppText>
                            <AppText size="16" bold color="rgb(50,50,100)">Take or Upload Photo then press Submit</AppText>
                        </View>
                        }
                        {state.selectedImage.map(image => {
                            return (
                                <TouchableOpacity onLongPress={() => deleteOldPhoto(image.uri)}>
                                    <Image source={{ uri: image.uri }} style={{ width: 90, height: 100, margin: hp(1) }} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                </ScrollView>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => selectFromGallery()} style={[styles.submitBtn,]}>
                        <AppText size="14">Open Gallery</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={setImage} style={[styles.submitBtn,]}>
                        <AppText size="14">Take a Photo</AppText></TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={[styles.submitBtn,
                    { borderRadius: 5, width: wp(40), alignSelf: 'center', backgroundColor: 'rgb(10,200,100)' }]}
                    onPress={() => props.navigation.navigate(FORM_SCREEN)}
                >
                    <AppText size="14">Submit</AppText></TouchableOpacity>
            </View>


        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp(70)
    },
    btnContainer: {
        // position: 'absolute',
        // bottom: 0,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center'
        // bottom: heightPercentageToDP(0),
    },

    submitBtn: {
        margin: 5,
        width: wp(35),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#51c4d3',
    },
})
export default ImagePickerScreen