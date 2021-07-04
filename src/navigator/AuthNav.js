import React from 'react';
import Signin from '../containers/Signin';
import { SignInScreen,SignUpScreen } from '../constants/Screen';
import Signup from '../containers/Signup';
import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();





const AuthNav = props => {
    return(
        <AuthStack.Navigator
        screenOptions={{
            headerShown:false,
            initialRouteName:SignInScreen
        }}
        >
            <AuthStack.Screen name={SignInScreen} component={Signin}/>
            <AuthStack.Screen name={SignUpScreen} component={Signup}/>
        </AuthStack.Navigator>
    )
}

export default AuthNav