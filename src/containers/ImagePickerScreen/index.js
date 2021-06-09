import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, NativeModules } from 'react-native'
import { Screen } from '../../components/common'
import DashboardHeader from '../../components/DashboardHeader'
import ImagePicker from 'react-native-image-picker';
// import ImageCropPicker from 'react-native-image-crop-picker';
import { heightPercentageToDP } from 'react-native-responsive-screen';

var ImageCropPicker = NativeModules.ImageCropPicker;
const ImagePickerScreen = props => {
    const [selectedImage, setSelectedImage] = useState([])
    const options = {
        title: 'Select Avatar',
        // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: false,
            path: 'images',
        },
    };
    const selectFromGallery = props => {
        ImageCropPicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
        }).then(images => { console.log(images) })
    }

    const setImage = () => {
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setSelectedImage([...selectedImage, {
                    uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
                    type: response.type,
                    name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
                }])
                console.log(selectedImage, "image")

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // console.log(response)
                // handleChange('image', {
                //   uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
                //   type: response.type,
                //   name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
                // });
            }
        });
    };


    return (
        <Screen>
            <View key="header">
                <DashboardHeader />
            </View>
            <View key="content">
                <TouchableOpacity onPress={() => selectFromGallery()}><Text>OPEN GALLERY</Text></TouchableOpacity>
                <TouchableOpacity onPress={setImage}><Text>OPEN CAMERA</Text></TouchableOpacity>
                {/* <Image source={{ uri: image }} /> */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {selectedImage.map(image => {
                        return (
                            <TouchableOpacity onLongPress={() => setSelectedImage(selectedImage.filter(selectedimage => selectedimage.uri != image.uri))}>
                                <Image source={{ uri: image.uri }} style={{ width: 90, height: 100, margin: heightPercentageToDP(1) }} />
                            </TouchableOpacity>
                        )
                    })}

                </View>
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
export default ImagePickerScreen