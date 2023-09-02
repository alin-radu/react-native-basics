import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { BasicCard } from '../components/UI/BasicCard';
import { BasicTitle } from '../components/UI/BasicTitle';
import { PrimaryButton } from '../components/UI/PrimaryButton';

import { colors } from '../constants/colors';
import { showIsInvalidNumberAlert } from '../alerts/alerts';

export const StartGameScreen = (props) => {
  const { onConfirmNumber } = props;

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

    onConfirmNumber(selectedNumber);
  };

  return (
    <View style={styles.mainContainer}>
      <BasicTitle>Guess My Number</BasicTitle>
      <BasicCard summary="Enter a Number">
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
      </BasicCard>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  input: {
    width: 75,
    height: 50,
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.accent500,
    borderBottomColor: colors.accent500,
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
