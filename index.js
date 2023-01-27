import { AppRegistry } from 'react-native';
import { AudioContext } from 'web-audio-dsp'
import { ParametricEQ } from 'web-audio-dsp'
import App from './App';

AppRegistry.registerComponent('myProject', () => App);


// Initialize the audio context
const audioContext = new AudioContext();

// Initialize the parametric EQ
const eq = new ParametricEQ(audioContext, numBands);

