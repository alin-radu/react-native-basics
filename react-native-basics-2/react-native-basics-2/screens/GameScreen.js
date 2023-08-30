import { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BasicTitle } from '../components/UI/BasicTitle';
import { NumberContainer } from '../components/game/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export const GameScreen = (props) => {
  const { userNumber } = props;

  const initialGuess = useCallback(
    () => generateRandomBetween(1, 100, userNumber),
    [userNumber]
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.mainContainer}>
      <BasicTitle>Opponent's Guess</BasicTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text></Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <Text>LOG ROUNDS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 48,
  },
});
