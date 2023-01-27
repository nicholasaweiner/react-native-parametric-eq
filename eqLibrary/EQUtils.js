import { validateBandId, validateGain, validateQValue } from './EQValidation';

export const createBand = (bandId, gain, q) => {
    if (!validateBandId(bandId)) {
        throw new Error(`Invalid bandId: ${bandId}. BandId must be a positive integer.`);
    }
    if (!validateGain(gain)) {
        throw new Error(`Invalid gain value: ${gain}. Gain must be a number between -48 and 48.`);
    }
    if (!validateQValue(q)) {
        throw new Error(`Invalid Q value: ${q}. Q must be a positive number.`);
    }

    try {
        // code to create new band with the provided bandId, gain, and q value using the parametric EQ library
    } catch (error) {
        throw new Error(`Failed to create band with id: ${bandId}. Error: ${error}`);
    }
}

export const updateBandGain = (bandId, gain) => {
    if (!validateBandId(bandId)) {
        throw new Error(`Invalid bandId: ${bandId}. BandId must be a positive integer.`);
    }
    if (!validateGain(gain)) {
        throw new Error(`Invalid gain value: ${gain}. Gain must be a number between -48 and 48.`);
    }

    try {
        // code to update the gain of the band with the provided bandId using the parametric EQ library
    } catch (error) {
        throw new Error(`Failed to update gain for band with id: ${bandId}. Error: ${error}`);
    }
}

export const updateBandQ = (bandId, q) => {
    if (!validateBandId(bandId)) {
        throw new Error(`Invalid bandId: ${bandId}. BandId must be a positive integer.`);
    }
    if (!validateQValue(q)) {
        throw new Error(`Invalid Q value: ${q}. Q must be a positive number.`);
    }

    try {
        // code to update the Q value of the band with the provided bandId using the parametric EQ library
    } catch (error) {
        throw new Error(`Failed to update Q value for band with id: ${bandId}. Error: ${error}`);
    }
}

export const removeBand = (bandId) => {
    if (!validateBandId(bandId)) {
        throw new Error(`Invalid bandId: ${bandId}. BandId must be a positive integer.`);
    }
    try {
        // code to remove the band with the provided bandId using the parametric EQ library
    } catch (error) {
        throw new Error(`Failed to remove band with id: ${bandId}. Error: ${error}`);
    }
}
