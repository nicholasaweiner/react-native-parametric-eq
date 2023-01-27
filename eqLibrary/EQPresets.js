import { createBand, changeQValue, adjustGain } from './EQControls';

const preset1 = {
  name: 'Rock',
  bands: [
    { frequency: 100, q: 1.5, gain: 3 },
    { frequency: 500, q: 2, gain: 4 },
    { frequency: 2000, q: 3, gain: 5 },
    { frequency: 6000, q: 2, gain: 2 },
    { frequency: 10000, q: 1.5, gain: 1 },
  ],
};

const preset2 = {
  name: 'Jazz',
  bands: [
    { frequency: 100, q: 0.7, gain: 2 },
    { frequency: 300, q: 1, gain: 3 },
    { frequency: 800, q: 1.5, gain: 4 },
    { frequency: 1500, q: 2, gain: 3 },
    { frequency: 6000, q: 3, gain: 2 },
    { frequency: 10000, q: 2, gain: 1 },
  ],
};

const preset3 = {
  name: 'Classical',
  bands: [
    { frequency: 100, q: 0.5, gain: 1 },
    { frequency: 200, q: 1, gain: 2 },
    { frequency: 500, q: 2, gain: 2 },
    { frequency: 1000, q: 3, gain: 2 },
    { frequency: 6000, q: 3, gain: 1 },
    { frequency: 10000, q: 2, gain: 0 },
  ],
};

const applyPreset = (preset) => {
  preset.bands.forEach((band) => {
    createBand(band.frequency);
    changeQValue(band.frequency, band.q);
    adjustGain(band.frequency, band.gain);
  });
};

export { preset1, preset2, preset3, applyPreset };
