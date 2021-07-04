import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home';
import {ContactScreen, HomeScreen, SettingScreen,BottleRequestScreen,RemainingDuesScreen, PreviousPaymentScreen} from '../constants/Screen'
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
        initialRouteName: HomeScreen,
      }}>
      <DashboardStack.Screen name={HomeScreen} component={Home} />
      <DashboardStack.Screen name={SettingScreen} component={Settings} />
      <DashboardStack.Screen name={BottleRequestScreen} component={RequestBottle} />
      <DashboardStack.Screen name={RemainingDuesScreen} component={RemainingDues} />
      <DashboardStack.Screen name={PreviousPaymentScreen} component={PreviousPayment} />
      
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
