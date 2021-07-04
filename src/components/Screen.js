import React from 'react'
import {View,ImageBackground} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'



const Screen = props => {
 const {children} = props
    return(
        <ImageBackground source={require("../assets/images/background.jpg")} 
            style={{width:widthPercentageToDP(100),height:heightPercentageToDP(100)}}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" style={{width:widthPercentageToDP(100),height:'100%'}}>
                {children}
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
}


export default Screen