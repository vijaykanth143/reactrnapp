import React from 'react';
import {View, StyleSheet, BackHandler, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Register = () => {
  const navigation = useNavigation();
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => navigation.goBack()},
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Register Screen</Text>
    </View>
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
export default Register;
