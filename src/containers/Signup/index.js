import React, { useState } from 'react'
import { View,Image, Alert, StyleSheet } from 'react-native'

import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'
import Screen from '../../components/Screen'
import InputWithLabel from '../../components/InputWithLabel'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { primary, secondary } from '../../constants/Colors'
import {validate} from '../../helper'
import { SignInScreen } from '../../constants/Screen'

const Signup = props => {

    const {navigation} = props
const [state,setState] = useState({
    email:"",
    password:"",
    confirm_password:"",
    phone_number1:"",
    phone_number2:"",
    address:"",
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
    Alert.alert("Login Action called")
}


    const [hidePassword,setHidePassword] = useState(true)
    return(
        <Screen>
            <View style={styles.titleContainer}>
               <View style={styles.logoContainer}>
                   <Image source={require("../../assets/images/logo.png")} style={{width:"100%",height:'100%'}} />
               </View>
           <AppText 
           color="white"
            // size={40}
            heading
            italic 
            bold 
            onPress={()=>Alert.alert("Clicked")}>
                Create a new account
            </AppText>
            </View>
           {/* <View style={styles.titleContainer}>
            <AppText primary heading color={secondary}>Create a New Account</AppText>
           </View> */}
            <View style={styles.inputField}>
                <InputWithLabel 
                    value={state.email} 
                    onChangeText={(text)=>updateState("email",text)} 
                    placeholder="email" 
                    border={heightPercentageToDP(4)}
                    />
            </View>
            <View style={styles.inputField}>
                <InputWithLabel 
                    value={state.password} 
                    onChangeText={(text)=>updateState("password",text)} 
                    placeholder="password" 
                    border={heightPercentageToDP(4)}
                    />
            </View>
            <View style={styles.inputField}>
                <InputWithLabel 
                    value={state.confirm_password} 
                    onChangeText={(text)=>updateState("confirm_password",text)} 
                    placeholder="confirm password" 
                    border={heightPercentageToDP(4)}
                    />
            </View>
            <View style={styles.inputField}>
                <InputWithLabel 
                    value={state.phone_number1} 
                    onChangeText={(text)=>updateState("phone_number1",text)} 
                    placeholder="phone_number 1" 
                    border={heightPercentageToDP(4)}
                    />
            </View>
            <View style={styles.inputField}>
                <InputWithLabel 
                    value={state.phone_number2} 
                    onChangeText={(text)=>updateState("phone_number2",text)} 
                    placeholder="phone_number 2" 
                    border={heightPercentageToDP(4)}
                    />
            </View>
            <View style={styles.inputField}>
                <InputWithLabel 
                    value={state.address} 
                    onChangeText={(text)=>updateState("address",text)} 
                    placeholder="address" 
                    border={heightPercentageToDP(4)}
                    />
            </View>
            <View style={styles.inputField}>
                <AppButton border={30} subHeading bold color="white" onPress={()=>onLoginPress()}>
                    Sign Up
                </AppButton>
            </View>
            
            <View style={[styles.newAccountContainer]}>
                <AppText 
                border={30} 
                 
                bold 
                color="white" 
                underline 
                style={styles.forgetPasswordText}
                onPress={()=>navigation.navigate(SignInScreen)}
                >
                    Or Login to your Account
                </AppText>
            </View>
           </Screen>
    )
}
const styles = StyleSheet.create({
    titleContainer:{
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(20),
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
        paddingBottom:heightPercentageToDP(10),
        paddingTop:heightPercentageToDP(2)
    }
})
export default Signup