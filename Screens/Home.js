import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
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
} from 'react-native';
const Home = () => {
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
    <View style={styles.background}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Signup" onPress={() => navigation.navigate('SignUp')} />
      <RNCamera
        ref={ref => {
          c amera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
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
export default Home;
