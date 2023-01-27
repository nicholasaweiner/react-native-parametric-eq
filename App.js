import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AudioUploader from './components/AudioUploader';
import ParametricEQ from './components/ParametricEQ';
import HelpModal from './components/HelpModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      showHelpModal: false,
    };
  }

  handleAudioUpload = (audio) => {
    this.setState({ audio });
  }

  toggleHelpModal = () => {
    this.setState((prevState) => ({ showHelpModal: !prevState.showHelpModal }));
  }

  render() {
    const { audio, showHelpModal } = this.state;
    return (
      <View>
        <AudioUploader onAudioUpload={this.handleAudioUpload} />
        {audio && (
          <ParametricEQ audio={audio} onToggleHelpModal={this.toggleHelpModal} />
        )}
        {showHelpModal && <HelpModal onToggleHelpModal={this.toggleHelpModal} />}
      </View>
    );
  }
}

export default App;
