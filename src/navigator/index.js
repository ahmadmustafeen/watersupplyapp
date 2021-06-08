/* eslint-disable prettier/prettier */
import React, { forwardRef, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthNav } from './AuthNav';
import DrawerMenu from '../containers/DrawerMenu';
import { DashboardNav } from './DashboardNav';
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         appColor: '#014488',
//         primary: '#c27e12',
//         secondary: '#010A2A',
//         white: 'white',
//         border: '#939393',
//         background: 'white',
//         textBlack: '#3B3B3B',
//         placeholder: '#939393',
//         borderColor: 'rgb(200,200,200)',
//         imageLoadingColor: '#2196F3',
//     },
// };

const DrawerNav = () => {


    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerMenu {...props} />}
            statusBarAnimation="fade"
            drawerStyle={{ backgroundColor: 'transparent', width: '90%' }}
            drawerType="front">
            <Drawer.Screen name="Main" component={DashboardNav} />
        </Drawer.Navigator>
    );
};
const navigatorComponent = (Auth = true) => {
    // Alert.alert("navigatorComponent")
    return (<RootStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        {/* {(!User.token) && <RootStack.Screen name="Auth" component={AuthNav} />}
        <RootStack.Screen name="Drawer" component={DrawerNav} />
        {(User.token) && <RootStack.Screen name="Auth" component={AuthNav} />} */}

        {/* {(Auth) && <RootStack.Screen name="Auth" component={AuthNav} />} */}
        <RootStack.Screen name="Drawer" component={DrawerNav} />
        {/* {(!Auth) && <RootStack.Screen name="Auth" component={AuthNav} />} */}

    </RootStack.Navigator>)
};

const Navigator = (props, ref) => {

    return (

        <NavigationContainer ref={ref} >
            { navigatorComponent(true)}
        </NavigationContainer>
    )

};

export default forwardRef(Navigator);
