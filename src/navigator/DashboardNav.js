import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/Home';
import {HOME, FORM_SCREEN} from '../constants/Screens';
import Form from '../containers/Form';

const DashboardStack = createStackNavigator();

const DashboardNav = props => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: FORM_SCREEN,
      }}>
      <DashboardStack.Screen name={FORM_SCREEN} component={Form} />
      <DashboardStack.Screen name={HOME} component={Home} />
    </DashboardStack.Navigator>
  );
};

export default DashboardNav;
