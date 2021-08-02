import React, { useState } from 'react'
import { View,Image, Alert, StyleSheet } from 'react-native'

import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'
import Screen from '../../components/Screen'
import InputWithLabel from '../../components/InputWithLabel'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { primary, secondary } from '../../constants/Colors'
import {validate} from '../../helper'
import { HomeScreen, HOME_SCREEN, SignUpScreen, SIGN_UP_SCREEN } from '../../constants/Screen'

const Signin = props => {

    const {navigation} = props
const [state,setState] = useState({
    username:"",
    password:""
})



const updateState = (key,value) =>{
    setState({...state,[key]:value})
}


// to be refactored into something simpler
const validateAction = props =>{
    return  (
        validate(state.email)&&
        validate(state.password)
    )
}



const onLoginPress = props =>{
    validateAction() &&
    navigation.navigate("Home",{Screen:HOME_SCREEN})
    // Alert.alert("Login Action called")
}


    const [hidePassword,setHidePassword] = useState(true)
    return(
        <Screen>
           <View style={styles.titleContainer}>
               <View style={styles.logoContainer}>
                   <Image source={require("../../assets/images/logo.png")} style={{width:"100%",height:'100%'}} />
               </View>
           <AppText 
        //    color={primary}
        color="white"
            size={40}
            italic 
            bold >
                Company
            </AppText>
            
           </View>
            <View style={styles.inputField}>
                <InputWithLabel value={state.email} onChangeText={(text)=>updateState("email",text)} placeholder="email" border={heightPercentageToDP(4)}/>
            </View>
            <View style={styles.inputField}>
                <InputWithLabel value={state.password} onChangeText={(text)=>updateState("password",text)} placeholder="password" protectedEntry={hidePassword} onEyePress={()=>setHidePassword(!hidePassword)} border={heightPercentageToDP(4)}/>
            </View>
            <View style={styles.inputField}>
                <AppButton border={30} subHeading bold color="white" onPress={()=>onLoginPress()}>
                    Sign In
                </AppButton>
            </View>
            <View style={[styles.forgetPasswordContainer]}>
                <AppText border={30} color="white" style={styles.forgetPasswordText}>
                    Forget Password? Click here
                </AppText>
            </View>
            <View style={[styles.newAccountContainer]}>
                <AppText 
                border={30} 
                bold 
                color="white" 
                underline 
                style={styles.forgetPasswordText}
                onPress={()=>navigation.navigate(SIGN_UP_SCREEN)}
                >
                   Or Create a new account!
                </AppText>
            </View>
            
           </Screen>
    )
}
const styles = StyleSheet.create({
    titleContainer:{
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(30),
        alignItems:'center',
        justifyContent:'center'
    },
    logoContainer:{
        width:widthPercentageToDP(30),
        aspectRatio:2,
    },
    inputField:{
        alignSelf:'center',
        overflow:'hidden',
        width:widthPercentageToDP(85),
        paddingVertical:heightPercentageToDP(2)
    },
    forgetPasswordContainer:{
        textAlign:'center',
        alignItems:'center',
        // paddingTop:heightPercentageToDP(5),
        paddingVertical:heightPercentageToDP(1)
    },
    newAccountContainer:{
        textAlign:'center',
        alignItems:'center',
        paddingTop:heightPercentageToDP(10)
    }
})
export default Signin