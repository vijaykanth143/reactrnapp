import React from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
  Text,
} from 'react-native';
const Home = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Home Screen</Text>
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
