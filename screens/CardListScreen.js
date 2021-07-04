import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {data} from '../Model/data';
import Card from '../Component/Card';

const CardListScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() => navigation.navigate('CardItemDetails', {itemData: item})}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',

    // backgroundColor: '#00a2ff',
  },
});

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   ScrollView,
//   Text,
//   Button,
//   StatusBar,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {Avatar} from 'react-native-paper';

// const CardListStack = createStackNavigator();
// const HomeStack = createStackNavigator();

// const CardListScreen = ({navigation}) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         color: '#f59042',
//         alignContent: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Your Card Here</Text>
//       <Button
//         title="Go to Details Screen.. Again"
//         onPress={() => navigation.push('Details')}
//       />
//     </View>
//   );
// };

// const CardListStackScreen = ({navigation}) => (
//   <CardListStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#000',
//         shadowColor: '#000',
//         elevation: 0,
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {fontWeight: 'bold'},
//     }}>
//     <CardListStack.Screen
//       name="CardListScreen"
//       component={CardListScreen}
//       options={{
//         title: 'CardListScreen',

//         headerLeft: () => (
//           <View style={{marginLeft: 10}}>
//             <Icon.Button
//               name="md-menu"
//               size={25}
//               color="#333"
//               backgroundColor="#fff"
//               onPress={() => {
//                 navigation.openDrawer();
//               }}></Icon.Button>
//           </View>
//         ),

//         headerTintColor: '#333',
//         headerTitleStyle: {fontWeight: 'bold'},
//         headerRight: () => (
//           <View style={{flexDirection: 'row', marginRight: 7}}>
//             <Icon.Button
//               name="search-sharp"
//               size={25}
//               color="#333"
//               backgroundColor="#fff"
//               onPress={() => {
//                 {
//                 }
//               }}></Icon.Button>
//             <TouchableOpacity
//               style={{paddingHorizontal: 4, marginTop: 5}}
//               onPress={() => {
//                 navigation.navigate('Profile');
//               }}>
//               <Avatar.Image source={require('../assets/prof.png')} size={35} />
//             </TouchableOpacity>
//           </View>
//         ),
//       }}
//     />
//   </CardListStack.Navigator>
// );

// export default CardListStackScreen;
