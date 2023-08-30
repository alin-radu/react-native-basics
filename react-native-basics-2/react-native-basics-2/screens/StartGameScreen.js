import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

const showIsInvalidNumberAlert = (onConfirmCallback) => {
  return Alert.alert(
    'Invalid number!',
    'The entered value has to be a number between 1 and 99.',
    [
      {
        text: 'Okay',
        style: 'destructive',
        onPress: onConfirmCallback,
      },
    ]
  );
};

export const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const selectedNumber = parseInt(enteredNumber);
    const isInvalidValidNumber =
      isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99;

    if (isInvalidValidNumber) {
      showIsInvalidNumberAlert(resetInputHandler);
      return;
    }

    console.log('Valid Number');
  };

  return (
    <View style={styles.mainOuterContainer}>
      <View style={styles.mainInnerContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainOuterContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  mainInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  input: {
    width: 75,
    height: 50,
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    flex: 1,
  },
});
