import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { SIGNIN_SCREEN } from '../constants/Screens'
import SignIn from '../containers/SignIn';




const AuthScreen = createStackNavigator();
export const AuthNav = () => {

    return (
        <AuthScreen.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: 'SIGNIN_SCREEN',
            }}>
            <AuthScreen.Screen name={"SIGNIN_SCREEN"} component={SignIn} />
        </AuthScreen.Navigator>
    );
};
