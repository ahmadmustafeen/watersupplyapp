import React from 'react'

import Navigator from './src/navigator';
import { View, Text } from 'react-native'

import { navigationRef } from './NavigationService';

import SignIn from './src/containers/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store'

const RootStack = createStackNavigator();

const App = props => {
  return (
    <Provider store={store}>
      <Navigator ></Navigator>
    </Provider>
    // <NavigationContainer>
    //   <RootStack.Navigator screenOptions={{
    //     headerShown: false,
    //   }}>
    //     <RootStack.Screen name="Home" component={SignIn} />
    //   </RootStack.Navigator>

    // </NavigationContainer>


  )

}


export default App