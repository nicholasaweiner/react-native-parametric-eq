import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const HelpModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [term, setTerm] = useState('');

  const handleOpen = (term) => {
    setTerm(term);
    setIsVisible(true);
  }

  const handleClose = () => {
    setIsVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isVisible}
      onRequestClose={handleClose}
    >
      <View>
        <Text>{term}</Text>
        <Text>Explanation of technical term</Text>
        <TouchableOpacity onPress={handleClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default HelpModal;
