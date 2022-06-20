import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './Screens/Login';
import Register from './Screens/Register';
import {initializeApp} from 'firebase/app';
import {ApplicationProvider} from '@ui-kitten/components';
import {tapHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
import Home from './Screens/Home';
import Welcome from './Screens/Welcome';
import Camera from './Screens/Camera';

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBGIBRQWzEpnOp1uqlaNe_xG-l36aUcLj8',
    authDomain: 'chatapp-rn-31124.firebaseapp.com',
    projectId: 'chatapp-rn-31124',
    storageBucket: 'chatapp-rn-31124.appspot.com',
    messagingSenderId: '840733300909',
    appId: '1:840733300909:web:274007c72ab8e295dece24',
  };
  initializeApp(firebaseConfig);
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
