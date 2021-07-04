/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component, useEffect} from 'react';
 import {View} from 'react-native';
 import {
   NavigationContainer,
   DefaultTheme as NavigationDefaultTheme,
   DarkTheme as NavigationDarkTheme,
 } from '@react-navigation/native';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import MainTabScreen from './screens/MainTabScreen';
 import SupportScreen from './screens/SupportScreen';
 import EditProfileScreen from './screens/EditProfileScreen';
 import ExploreScreen from './screens/ExploreScreen';
 import SettingsScreen from './screens/SettingsScreen';
 import DetailsScreen from './screens/DetailsScreen';
 import ProfileScreen from './screens/ProfileScreen';
 import OfferScreen from './screens/OfferScreen';
 import CardListScreen from './screens/CardListScreen';
 
 import RootStackScreen from './screens/RootStackScreen';
 import AsyncStorage from '@react-native-community/async-storage';
 // import LottieView from 'lottie-react-native';
 import {AuthContext} from './Component/Context';
 
 import {
   Provider as PaperProvider,
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme,
 } from 'react-native-paper';
 
 import SignInScreen from './screens/SignInScreen';
 
 import {DrawerContent} from './screens/DrawerContent';
 import {ActivityIndicator} from 'react-native-paper';
 import {set} from 'react-native-reanimated';
 
 // import firebase from 'firebase';
 // import {firebaseConfig} from './config';
 // firebase.initializeApp(firebaseConfig);
 
 const Drawer = createDrawerNavigator();
 
 const App = () => {
   // const [isLoading, setIsLoading] = React.useState(true);
   // const [userToken, setUserToken] = React.useState(null);
 
   const [isDarkTheme, setIsDarkTheme] = React.useState(false);
 
   const initialLoginState = {
     isLoading: true,
     userName: null,
     userToken: null,
   };
 
   const CustomDefaultTheme = {
     ...NavigationDefaultTheme,
     ...PaperDefaultTheme,
     colors: {
       ...NavigationDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       background: '#fff',
       text: '#0000',
     },
   };
 
   const CustomDarkTheme = {
     ...NavigationDarkTheme,
     ...PaperDarkTheme,
     colors: {
       ...NavigationDarkTheme.colors,
       ...PaperDarkTheme.colors,
       background: '#0a0b1d',
       text: '#6dfff8',
       color: '#6dfff8',
     },
   };
 
   const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
 
   const loginReducer = (prevState, action) => {
     switch (action.type) {
       case 'RETRIVE_TOKEN':
         return {
           ...prevState,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGIN':
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGOUT':
         return {
           ...prevState,
           userName: null,
           userToken: null,
           isLoading: false,
         };
       case 'REGISTER':
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
     }
   };
 
   const [loginState, dispatch] = React.useReducer(
     loginReducer,
     initialLoginState,
   );
 
   const authContext = React.useMemo(
     () => ({
       signIn: async (foundUser) => {
         // setUserToken('NIck');
         // setIsLoading(false);
         const userToken = String(foundUser[0].userToken);
         const userName = String(foundUser[0].userName);
         // if (userName == 'nickkubde2' && password == 'password')
         {
           try {
             await AsyncStorage.setItem('userToken', userToken);
           } catch (e) {
             console.log(e);
           }
         }
 
         dispatch({type: 'LOGIN', id: userName, token: userToken});
       },
       signOut: async () => {
         // setUserToken(null);
         // setIsLoading(false);
         try {
           await AsyncStorage.removeItem('userToken');
         } catch (e) {
           console.log(e);
         }
         dispatch({type: 'LOGOUT'});
       },
       signUp: () => {
         // setUserToken('NIck');
         // setIsLoading(false);
       },
       toggleTheme: () => {
         setIsDarkTheme((isDarkTheme) => !isDarkTheme);
       },
     }),
     [],
   );
 
   useEffect(() => {
     setTimeout(async () => {
       // setIsLoading(false);
       let userToken;
       userToken = null;
       try {
         userToken = await AsyncStorage.getItem('userToken');
       } catch (e) {
         console.log(e);
       }
       // console.log('user token:', userToken);
       dispatch({type: 'RETRIVE_TOKEN', token: userToken});
     }, 1000);
   }, []);
 
   if (loginState.isLoading) {
     return (
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <ActivityIndicator size="large" color="#44ff00" />
         {/* <LottieView source={require('./assets/Loader/22380-e-commerce.json')} autoPlay loop />; */}
         {/* <ActivityIndicator size="small" /> */}
       </View>
     );
   }
 
   return (
     <PaperProvider theme={PaperDarkTheme}>
       <AuthContext.Provider value={authContext}>
         <NavigationContainer theme={theme}>
           {loginState.userToken !== null ? (
             <Drawer.Navigator
               headerMode="none"
               initialRouteName="Home"
               drawerContent={(props) => <DrawerContent {...props} />}>
               <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
               <Drawer.Screen name="SupportScreen" component={SupportScreen} />
               <Drawer.Screen name="ExploreScreen" component={ExploreScreen} />
               <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
               <Drawer.Screen name="Details" component={DetailsScreen} />
               <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
               <Drawer.Screen name="Edit" component={EditProfileScreen} />
               <Drawer.Screen name="Offer" component={OfferScreen} />
               <Drawer.Screen name="CardListScreen" component={CardListScreen} />
             </Drawer.Navigator>
           ) : (
             <RootStackScreen />
           )}
         </NavigationContainer>
       </AuthContext.Provider>
     </PaperProvider>
   );
 };
 
 export default App;
 