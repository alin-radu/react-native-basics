import { useMemo, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { BasicTitle } from '../components/UI/BasicTitle';
import { PrimaryButton } from '../components/UI/PrimaryButton';
import { NumberContainer } from '../components/game/NumberContainer';
import { BasicCard } from '../components/UI/BasicCard';

import { missleadingAnswearAlert } from '../alerts/alerts';
import { GuessLogItem } from '../components/game/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = (props) => {
  const { userNumber, onGameOver } = props;

  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      missleadingAnswearAlert();
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevState) => [newRandomNumber, ...prevState]);
  };

  return (
    <View style={styles.mainContainer}>
      <BasicTitle>Opponent's Guess</BasicTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <BasicCard summary="Higher or lower?">
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </BasicCard>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 48,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: 8,
  },
});
