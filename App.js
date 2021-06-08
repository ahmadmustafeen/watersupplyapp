import React from 'react'

// import Navigator from './src/navigator';
import { View, Text } from 'react-native'

import { navigationRef } from './NavigationService';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/containers/SignIn';
import { NavigationContainer } from '@react-navigation/native';


const RootStack = createStackNavigator();

const App = props => {
  return (
    <View>
      <SignIn />
      {/* <Navigator ref={navigationRef} /> */}
      {/* <NavigationContainer >
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="Login" component={SignIn} />
        </RootStack.Navigator>
      </NavigationContainer> */}

    </View>
  )

}


export default App