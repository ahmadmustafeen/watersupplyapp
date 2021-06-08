import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { SIGNIN_SCREEN } from '../constants/Screens'
import SignIn from '../containers/SignIn';
import { SIGNIN_SCREEN } from '../constants/Screens';


const AuthStack = createStackNavigator();


const AuthNav = props => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name={SIGNIN_SCREEN} component={SignIn} />
        </AuthStack.Navigator>
    )
}


export default AuthNav