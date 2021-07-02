import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { SIGNIN_SCREEN } from '../constants/Screens'
import SignIn from '../containers/SignIn';
import { SIGNIN_SCREEN, SIGNUP_SCREEN } from '../constants/Screens';
import SignUp from '../containers/SignUp';


const AuthStack = createStackNavigator();


const AuthNav = props => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: SIGNIN_SCREEN
            }}>
            <AuthStack.Screen name={SIGNIN_SCREEN} component={SignIn} />
            <AuthStack.Screen name={SIGNUP_SCREEN} component={SignUp} />
        </AuthStack.Navigator>
    )
}


export default AuthNav