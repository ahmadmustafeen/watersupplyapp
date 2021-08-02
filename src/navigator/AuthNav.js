import React from 'react';
import Signin from '../containers/Signin';
import { SIGN_IN_SCREEN,SIGN_UP_SCREEN } from '../constants/Screen';
import Signup from '../containers/Signup';
import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();





const AuthNav = props => {
    return(
        <AuthStack.Navigator
        screenOptions={{
            headerShown:false,
            initialRouteName:SIGN_IN_SCREEN
        }}
        >
            <AuthStack.Screen name={SIGN_IN_SCREEN} component={Signin}/>
            <AuthStack.Screen name={SIGN_UP_SCREEN} component={Signup}/>
        </AuthStack.Navigator>
    )
}

export default AuthNav