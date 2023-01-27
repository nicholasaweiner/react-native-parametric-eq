import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Slider } from 'react-native-elements';
import EQ from './EQ';

const EQControls = () => {
    const [gain, setGain] = useState(0);
    const [qValue, setQValue] = useState(1);
    const [selectedBand, setSelectedBand] = useState(0);

    const handleGainChange = (value) => {
        setGain(value);
        EQ.setGain(selectedBand, value);
    }

    const handleQChange = (value) => {
        setQValue(value);
        EQ.setQ(selectedBand, value);
    }

    const handleBandSelection = (index) => {
        setSelectedBand(index);
    }

    const handleNewBand = () => {
        const newBandIndex = EQ.createNewBand();
        setSelectedBand(newBandIndex);
    }

    return (
        <View>
            <Text>Selected Band: {selectedBand}</Text>
            <Slider
                value={gain}
                onValueChange={handleGainChange}
                minimumValue={-20}
                maximumValue={20}
                step={1}
            />
            <Text>Gain: {gain}</Text>
            <Slider
                value={qValue}
                onValueChange={handleQChange}
                minimumValue={0.1}
                maximumValue={10}
                step={0.1}
            />
            <Text>Q: {qValue}</Text>
            <Button title="Create New Band" onPress={handleNewBand} />
            <View>
                {EQ.bands.map((band, index) => (
                    <Button
                        key={index}
                        title={`Band ${index}`}
                        onPress={() => handleBandSelection(index)}
                    />
                ))}
            </View>
        </View>
    );
};

export default EQControls;
