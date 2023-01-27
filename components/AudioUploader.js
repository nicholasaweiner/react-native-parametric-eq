import React, { Component } from 'react';
import { View, Text, Button, ImagePicker } from 'react-native';

class AudioUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChooseAudio = async () => {
    const options = {
      title: 'Select Audio',
      storageOptions: {
        skipBackup: true,
        path: 'audio',
      },
    };

    try {
      const result = await ImagePicker.launchImageLibrary(options);
      if (!result.didCancel) {
        this.props.onAudioUpload(result);
      }
    } catch (error) {
      console.log('Error choosing audio:', error);
    }
  }

  render() {
    return (
      <View>
        <Button title="Choose Audio" onPress={this.handleChooseAudio} />
      </View>
    );
  }
}

export default AudioUploader;
