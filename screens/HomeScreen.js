import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableOpacityComponent,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from '../Component/StarRating';
// import CardItemDetails from './CardItemDetails';
// import CardListScreen from './CardListScreen'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {Avatar} from 'react-native-paper';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';

const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#0a0b1d">
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb5.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb6.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb7.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb8.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/HomeBanner/hb9.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Electronic'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-phone-portrait" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Electronic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'E-Accessories'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-watch-sharp" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>E-Accessories</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Resturant'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-restaurant-sharp" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Resturant</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Health-Line'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-fitness-sharp" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Health-Line</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Headphones'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-headset-sharp" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Headphones</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Accessories'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-glasses" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Accessories</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Cafe'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-cafe" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Cafe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Fast Food'})
          }>
          <View style={styles.categoryIcon}>
            <Icon name="ios-fast-food-sharp" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Food</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 15,
            color: '#333',
            fontWeight: 'bold',
          }}>
          Recommendent Products
        </Text>
        {/* <View style={styles.card}></View> */}
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/HomeBanner/hb7.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>First Product</Text>
            <Text> 500 Rs</Text>
            <StarRating ratings={5} reviews={66} />
            <Text style={styles.cardDetails}>
              {' '}
              Here The First Product Display Of Your App
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/HomeBanner/hb8.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Second Product</Text>
            <Text> 78,956 Rs</Text>
            <StarRating ratings={5} reviews={88} />
            <Text style={styles.cardDetails}>
              {' '}
              Here The Second Product Display Of Your App
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/HomeBanner/hb4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Third Product</Text>
            <Text> 652 Rs</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              {' '}
              Here The Third Product Display Of Your App
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/HomeBanner/hb2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Fourth Product</Text>
            <Text> 852 Rs</Text>
            <StarRating ratings={3} reviews={105} />
            <Text style={styles.cardDetails}>
              {' '}
              Here The Fourth Product Display Of Your App
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/HomeBanner/hb6.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Fifth Product</Text>
            <Text> 8,500 Rs</Text>
            <StarRating ratings={3} reviews={56} />
            <Text style={styles.cardDetails}>
              {' '}
              Here The Fifth Product Display Of Your App
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// export default HomeScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Betul Store',

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
          <View style={{flexDirection: 'row', marginRight: 0}}>
            <Icon.Button
              name="search-sharp"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => {
                {
                }
              }}></Icon.Button>
            {/* <TouchableOpacity
              style={{paddingHorizontal: 4, marginTop: 5}}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Avatar.Image source={require('../assets/prof.png')} size={35} />
            </TouchableOpacity> */}
          </View>
        ),
      }}
    />

    <HomeStack.Screen
      name="CardListScreen"
      component={CardListScreen}
      options={({route}) => ({
        title: route.params.title,
        headerBackTitleVisible: false,
        headerTintColor: '#333',
        headerTitleStyle: {fontWeight: 'bold'},
      })}
    />

    <HomeStack.Screen
      name="CardItemDetails"
      component={CardItemDetails}
      options={({route}) => ({
        // title: route.params.title,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerTitle: false,
        headerTransparent: true,
      })}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#76e8b7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#333',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
