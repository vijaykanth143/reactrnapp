import React, {useState} from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
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
const Login = () => {
  const [background, setBackground] = useState(true);
  const [value, setValue] = useState('');
  const [Password, setPassword] = useState('');
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
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
      navigation.navigate('Home');
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
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.background}>
          <Text style={{fontSize: 35, marginBottom: 7}}>Login</Text>
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
            <Text style={{fontSize: 17, marginBottom: 7}}>Password</Text>
            <Input
              placeholder="Enter Password"
              onSubmitEditing={Keyboard.dismiss}
              value={Password}
              color="black"
              caption={renderCaption}
              accessoryRight={renderIcon}
              onChangeText={nextValue => setPassword(nextValue)}
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
          </KeyboardAvoidingView>

          <Button
            onPress={handleSubmit}
            status="primary"
            style={{marginBottom: 10}}>
            Login
          </Button>
          <TouchableOpacity>
            <Text
              status="primary"
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
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
export default Login;
