import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home'
import { HOME } from '../constants/Screens';



const DashboardStack = createStackNavigator();

const DashboardNav = props => {
    return (
        <DashboardStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <DashboardStack.Screen name={HOME} component={Home} />
        </DashboardStack.Navigator>

    )
}



export default DashboardNav