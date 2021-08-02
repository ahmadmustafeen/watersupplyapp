
import React, { forwardRef, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import AuthNav from './AuthNav';
import DashboardNav from './DashboardNav';
import { navigationRef } from '../../NavigationService';
import DrawerMenu from '../containers/DrawerMenu';




const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"MAIN"}
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
        // initialRouteName:SignInScreen
      }}>
        {/* <RootStack.Screen name={SignUpScreen} component={Signup} /> */}
        {/* <RootStack.Screen name={SignInScreen} component={Signin} /> */}

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
      setLoggedIn(!!JSON.parse(valueString)?.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {true ? navigatorComponent(true) : null} */}
      {navigatorComponent(false)}
    </NavigationContainer>
  );
};

export default forwardRef(Navigator);
