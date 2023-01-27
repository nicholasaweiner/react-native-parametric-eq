import RNAudioEqualizer from 'react-native-equalizer';

const MAX_BANDS = 10;
const MIN_GAIN = -15;
const MAX_GAIN = 15;
const MIN_Q = 0.1;
const MAX_Q = 10;

class EQ {
  bands = [];

  createNewBand(frequency, gain = 0, q = 1) {
    if (this.bands.length >= MAX_BANDS) {
      throw new Error(`Cannot create more than ${MAX_BANDS} bands`);
    }

    if (!this.isValidFrequency(frequency)) {
      throw new Error(`Invalid frequency: ${frequency}`);
    }

    if (!this.isValidGain(gain)) {
      throw new Error(`Invalid gain: ${gain}`);
    }

    if (!this.isValidQ(q)) {
      throw new Error(`Invalid Q value: ${q}`);
    }

    this.bands.push({ frequency, gain, q });
    RNAudioEqualizer.createBand(frequency, gain, q);
  }

  changeQ(bandIndex, q) {
    if (!this.isValidBandIndex(bandIndex)) {
      throw new Error(`Invalid band index: ${bandIndex}`);
    }

    if (!this.isValidQ(q)) {
      throw new Error(`Invalid Q value: ${q}`);
    }

    this.bands[bandIndex].q = q;
    RNAudioEqualizer.setBandQ(bandIndex, q);
  }

  adjustGain(bandIndex, gain) {
    if (!this.isValidBandIndex(bandIndex)) {
      throw new Error(`Invalid band index: ${bandIndex}`);
    }

    if (!this.isValidGain(gain)) {
      throw new Error(`Invalid gain: ${gain}`);
    }

    this.bands[bandIndex].gain = gain;
    RNAudioEqualizer.setBandGain(bandIndex, gain);
  }

  isValidFrequency(frequency) {
    return (
      typeof frequency === 'number' &&
      frequency > 0 &&
      frequency <= RNAudioEqualizer.getMaxFrequency()
    );
  }

  isValidGain(gain) {
    return typeof gain === 'number' && gain >= MIN_GAIN && gain <= MAX_GAIN;
  }

  isValidQ(q) {
    return typeof q === 'number' && q >= MIN_Q && q <= MAX_Q;
  }

  isValidBandIndex(index) {
    return typeof index === 'number' && index >= 0 && index < this.bands.length;
  }
}

export default new EQ();
