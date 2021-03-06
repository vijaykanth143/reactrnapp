import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
  Alert,
  Text,
  BackHandler,
  Image,
} from 'react-native';
const Welcome = ({route}) => {
  const img = route.params;
  const {name} = route.params;
  console.log('..............................................................');
  console.log(img);
  console.log('..............................................................');
  const navigation = useNavigation();
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  return (
    <>
      <View style={styles.background}>
        <Text style={styles.text}>Welcome {name}</Text>

        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
      <Image source={{uri: img.uri}} style={{flex: 1}} />
    </>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default Welcome;
