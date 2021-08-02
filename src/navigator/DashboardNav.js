import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home';
import {
    CONTACT_SCREEN, 
    HOME_SCREEN, 
    SETTING_SCREEN,
    BOTTLE_REQUEST_SCREEN,
    REMAINING_DUES_SCREEN, 
    PREVIOUS_PAYMENT_SCREEN
  } from '../constants/Screen'
import  Settings  from '../containers/Settings'
import RequestBottle from '../containers/RequestBottle.js';
import RemainingDues from '../containers/RemainingDues';
import PreviousPayment from '../containers/PreviousPayment';

const DashboardStack = createStackNavigator();

const DashboardNav = props => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: HOME_SCREEN,
      }}>
      <DashboardStack.Screen name={HOME_SCREEN} component={Home} />
      <DashboardStack.Screen name={SETTING_SCREEN} component={Settings} />
      <DashboardStack.Screen name={BOTTLE_REQUEST_SCREEN} component={RequestBottle} />
      <DashboardStack.Screen name={REMAINING_DUES_SCREEN} component={RemainingDues} />
      <DashboardStack.Screen name={PREVIOUS_PAYMENT_SCREEN} component={PreviousPayment} />
      
      {/* <DashboardStack.Screen name={ContactScreen} component={Settings} /> */}
      {/* <DashboardStack.Screen name={HOME_SCREEN} component={Home} />
      <DashboardStack.Screen name={FORM_SCREEN} component={Form} /> */}
      {/* <DashboardStack.Screen
        name={IMAGE_PICKER_SCREEN}
        component={ImagePickerScreen}
      /> */}
    </DashboardStack.Navigator>
  );
};

export default DashboardNav;
