import React, {Component, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  StatusBar,
  View,
  Image,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import Notifications from '../Model/Notifiactions';
import {SwipeListView} from 'react-native-swipe-list-view';
import Swiper from 'react-native-swiper';

const OfferStack = createStackNavigator();

const OfferScreen = ({navigation}) => {
  const [listData, setListData] = useState(
    Notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      info: NotificationItem.info,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const onLeftActionStatusChange = (rowKey) => {
    console.log('onLeftActionStatusChange', rowKey);
  };

  const onRightActionStatusChange = (rowKey) => {
    console.log('onRightActionStatusChange', rowKey);
  };

  const onRightAction = (rowKey) => {
    console.log('onRightAction', rowKey);
  };

  const onLeftAction = (rowKey) => {
    console.log('onLeftAction', rowKey);
  };

  const VisibleItem = (props) => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      leftActionState,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View
        style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
        <TouchableHighlight
          style={styles.rowFrontVisible}
          onPress={() => console.log('Element touched')}
          underlayColor={'#aaa'}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {data.item.title}
            </Text>
            <Text style={styles.details} numberOfLines={1}>
              {data.item.info}
            </Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  };

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = (props) => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
        <Text>Left</Text>
        {!leftActionActivated && (
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onClose}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={25}
              style={styles.trash}
              color="#fff"
            />
          </TouchableOpacity>
        )}
        {!leftActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRight,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={onDelete}>
              <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={25}
                  color="#fff"
                />
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
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
      <StatusBar barStyle="dark-content" />
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        onRowDidOpen={onRowDidOpen}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
      />
    </ScrollView>
  );
};

const OfferStackScreen = ({navigation}) => (
  <OfferStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <OfferStack.Screen
      name="Profile"
      component={OfferScreen}
      options={{
        title: 'Offers',

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
  </OfferStack.Navigator>
);

export default OfferStackScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

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
});
