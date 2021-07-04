import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme, Avatar} from 'react-native-paper';

import HomeScreen from './HomeScreen';
import CartScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import OfferScreen from './OfferScreen';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import EditProfileScreen from './EditProfileScreen';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStackScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const EditProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#0a0b1d',
        tabBarIcon: ({color}) => (
          <Icon name="account" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Details"
      component={CartScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarColor: '#0a0b1d',
        tabBarIcon: ({color}) => (
          <Icon name="cart-minus" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#0a0b1d',
        tabBarIcon: ({color}) => (
          <Icon name="shield-home-outline" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#0a0b1d',
        tabBarIcon: ({color}) => (
          <Icon name="google-maps" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Offers"
      component={OfferScreen}
      options={{
        tabBarLabel: 'Offer',
        tabBarColor: '#0a0b1d',
        tabBarIcon: ({color}) => <Feather name="zap" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#00ff44',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#000"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
        headerTintColor: '#00ff44',
        headerTitleStyle: {fontWeight: 'bold'},
      }}
    />
  </HomeStack.Navigator>
);

export default MainTabScreen;

// const ProfileStack = ({navigation}) => {

// <EditProfileStack.Screen name='EditProfile' options={{title='Edit Profile' }} component={EditProfileScreen}></EditProfileStack.Screen> }
