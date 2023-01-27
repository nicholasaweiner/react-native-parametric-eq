import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Slider } from 'react-native-elements';
import { equalizer } from 'react-native-equalizer';

class ParametricEQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      bands: [],
      gain: 0,
      frequency: 0,
      q: 0,
    };
  }

  componentDidMount() {
    this.setState({
      audio: this.props.audio,
      bands: this.props.bands,
    });
    this.createBands();
  }

  createBands() {
    const { audio } = this.state;
    equalizer.createBands(audio, bands, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  handleGainChange = (value) => {
    equalizer.setGain(value, (error) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({ gain: value });
      }
    });
  }

  handleFrequencyChange = (value) => {
    equalizer.setFrequency(value, (error) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({ frequency: value });
      }
    });
  }

  handleQChange = (value) => {
    equalizer.setQ(value, (error) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({ q: value });
      }
    });
  }

  render() {
    const { audio, bands, gain, frequency, q } = this.state;
    if (!audio) {
      return null;
    }
    return (
      <View>
        <Text>Gain</Text>
        <Slider
          value={gain}
          onValueChange={this.handleGainChange}
          step={1}
          minimumValue={-24}
          maximumValue={24}
        />
        <Text>Frequency</Text>
        <Slider
          value={frequency}
          onValueChange={this.handleFrequencyChange}
          step={1}
          minimumValue={20}
          maximumValue={20000}
        />
        <Text>Q</Text>
        <Slider
          value={q}
          onValueChange={this.handleQChange}
          step={0.01}
          minimumValue={0.01}
          maximumValue={10}
        />
      </View>
    );
  }
}

export default ParametricEQ;
