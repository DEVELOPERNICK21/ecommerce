import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';

const SupportStack = createStackNavigator();

const SupportScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        color: '#f59042',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Your Profile Here</Text>
      <Button
        title="Go to Details Screen.. Again"
        onPress={() => navigation.push('Details')}
      />

      <Button
        title="Go to Explore"
        onPress={() => navigation.navigate('EdiProfileScreen')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack('Details')} />
      <Button
        title="Go to First Screen"
        onPress={() => navigation.popToTop('Details')}
      />
    </View>
  );
};

const SupportStackScreen = ({navigation}) => (
  <SupportStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <SupportStack.Screen
      name="Support"
      component={SupportScreen}
      options={{
        title: 'Support',

        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Icon.Button
              name="md-menu"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          </View>
        ),

        headerTintColor: '#333',
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <View style={{flexDirection: 'row', marginRight: 7}}>
            <Icon.Button
              name="search-sharp"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => {
                {
                }
              }}></Icon.Button>
            <TouchableOpacity
              style={{paddingHorizontal: 4, marginTop: 5}}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Avatar.Image source={require('../assets/prof.png')} size={35} />
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  </SupportStack.Navigator>
);

export default SupportStackScreen;
