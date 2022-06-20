import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import React, {useState} from 'react';
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
import Camera from './Camera';
const Home = ({route}) => {
  const img = route.params;
  console.log('.....................................................');
  console.log(img);
  console.log('.....................................................');
  const navigation = useNavigation();
  const [camera, setShowCamera] = useState(false);
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
    <>
      <View style={styles.background}>
        <Text style={styles.text}>Home Screen</Text>
        <Button title="Signup" onPress={() => navigation.navigate('SignUp')} />
        <Button title="camera" onPress={() => navigation.navigate('Camera')} />
      
      </View>
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
    color: 'black',
  },
});
export default Home;
