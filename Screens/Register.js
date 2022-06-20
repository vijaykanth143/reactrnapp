import React, {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;
const Register = () => {
  const [background, setBackground] = useState(true);
  const [value, setValue] = useState('');
  const [Password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const auth = getAuth();

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
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <View>
        <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
      </View>
    </TouchableWithoutFeedback>
  );
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };
  const handleSubmit = () => {
    if (
      value.indexOf('@spinebiz.com', value.length - '@spinebiz.com'.length) !==
      -1
    ) {
      console.log(value);
    } else if (value == '') {
      Alert.alert('Invalid email!', 'Plz enter a valid Email', [
        {text: 'Okay', style: 'destructive'},
      ]);
      return;
    } else {
      Alert.alert('Invalid email!', 'Plz enter a valid Email', [
        {text: 'Okay', style: 'destructive'},
      ]);
      return;
    }
    if (Password.length >= 8) {
      console.log(Password);
      createUserWithEmailAndPassword(auth, value, Password)
        .then(response => {
          console.log(response.user);
        })
        .catch(error => {
          Alert.alert(error.message[{text: 'okay', style: 'destructive'}]);
        });
      navigation.navigate('Welcome', {name});
    } else {
      Alert.alert('enter', ' Strong password', [
        {text: 'Okay', style: 'destructive'},
      ]);
    }
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.background}>
          <Text style={{fontSize: 35, marginBottom: 7}}>Register</Text>
          <KeyboardAvoidingView>
            <Text style={{fontSize: 17, marginBottom: 7}}>Email</Text>
            <Input
              placeholder="Enter Email"
              onSubmitEditing={Keyboard.dismiss}
              value={value}
              color="black"
              onChangeText={nextValue => setValue(nextValue)}
              style={styles.input}
            />
            <Text style={{fontSize: 17, marginBottom: 7}}>Username</Text>
            <Input
              placeholder="Enter name"
              onSubmitEditing={Keyboard.dismiss}
              value={name}
              color="black"
              onChangeText={nextValue => setName(nextValue)}
              style={styles.input}
            />
            <Text style={{fontSize: 17, marginBottom: 7}}>Password</Text>
            <Input
              placeholder="Enter Password"
              onSubmitEditing={Keyboard.dismiss}
              value={Password}
              color="black"
              accessoryRight={renderIcon}
              caption={renderCaption}
              onChangeText={nextValue => setPassword(nextValue)}
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
          </KeyboardAvoidingView>

          <Button
            onPress={handleSubmit}
            status="primary"
            style={{marginBottom: 10}}>
            SignUp
          </Button>
          <Text style={{fontSize: 13}}>Have an account</Text>
          <TouchableOpacity>
            <Text status="primary" onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </TouchableOpacity>
        </Layout>
      </ApplicationProvider>
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
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
  input: {
    width: '80%',
    marginBottom: 10,
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
});
export default Register;
