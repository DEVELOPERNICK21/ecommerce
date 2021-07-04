import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
// import splashTwoScreen from './splashTwoScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({Navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    {/* <RootStack.Screen name="splashTwoScreen" component={splashTwoScreen} /> */}
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
