import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import {StyleSheet, Button, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
      img: {},
      show: false,
    };
  }

  takePicture = async () => {
    const {data} = this.state;

    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        console.log(data);
        this.setState({img: data});
        this.setState({show: !this.state.show});
        this.props.navigation.navigate('Welcome', this.state.img);
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };
  render() {
    return (
      <>
        <RNCamera
          ref={ref => {
            this.camera = ref;
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

        <Button title="click" activeOpacity={0.5} onPress={this.takePicture} />
        {this.state.show ? (
          <Image style={{height: 100}} source={{uri: this.state.img.uri}} />
        ) : null}
      </>
    );
  }
}
const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
});
