/* eslint-disable prettier/prettier */
import React, { forwardRef, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthNav from './AuthNav';
import DrawerMenu from '../containers/DrawerMenu';
import DashboardNav from './DashboardNav';
import { HOME, FORM_SCREEN } from '../constants/Screens';
import { navigationRef } from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName={HOME}
      drawerContent={props => <DrawerMenu {...props} />}
      statusBarAnimation="fade"
      drawerStyle={{ backgroundColor: 'transparent', width: '90%' }}
      drawerType="front">
      <Drawer.Screen name="Main" component={DashboardNav} />
    </Drawer.Navigator>
  );
};
const navigatorComponent = Auth => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!Auth && <RootStack.Screen name="Auth" component={AuthNav} />}
      <RootStack.Screen name="Home" component={DrawerNav} />
      {Auth && <RootStack.Screen name="Auth" component={AuthNav} />}
    </RootStack.Navigator>
  );
};

const Navigator = (props, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    Add().then(() => {
      setLoaded(true);
    });
  }, []);

  const Add = async () => {
    try {
      const valueString = await AsyncStorage.getItem('@userProfile');
      setLoggedIn(!!JSON.parse(valueString).token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <RootStack.Navigator> */}
      {loaded ? navigatorComponent(loggedIn) : null}

      {/* <RootStack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <RootStack.Screen name="Home" component={Home} />
                </RootStack.Navigator> */}
      {/* </RootStack.Navigator> */}
    </NavigationContainer>
  );
};

export default forwardRef(Navigator);
