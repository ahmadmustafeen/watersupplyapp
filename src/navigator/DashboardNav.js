import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home'
import { HOME, IMAGE_PICKER_SCREEN } from '../constants/Screens';
import ImagePickerScreen from '../containers/ImagePickerScreen';



const DashboardStack = createStackNavigator();

const DashboardNav = props => {
    return (
        <DashboardStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <DashboardStack.Screen name={HOME} component={Home} />
            <DashboardStack.Screen name={IMAGE_PICKER_SCREEN} component={ImagePickerScreen} />
        </DashboardStack.Navigator>

    )
}



export default DashboardNav