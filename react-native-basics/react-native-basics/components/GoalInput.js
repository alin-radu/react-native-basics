import { useState, useRef } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

export const GoalInput = (props) => {
  const { isVisibleModal, onAddItem, onCancelAddItem } = props;

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const textInputRef = useRef(null);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText) {
      return;
    }

    onAddItem(enteredGoalText);
    setEnteredGoalText('');
    textInputRef.current.blur();
  };

  return (
    <Modal visible={isVisibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelAddItem} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  textInput: {
    width: '100%',
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 5,
    backgroundColor: '#e4d0ff',
    color: '#120438',
  },
  goalItemText: {
    color: 'white',
  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
});
