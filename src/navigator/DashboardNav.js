import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Home from '../containers/Home'

import { HOME } from '../constants/Screens'




const Stack = createStackNavigator();
export const DashboardNav = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={HOME} component={Home} />
        </Stack.Navigator>
    );
};
