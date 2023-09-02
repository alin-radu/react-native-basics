import { Image, StyleSheet, Text, View } from 'react-native';
import { BasicTitle } from '../components/UI/BasicTitle';
import { colors } from '../constants/colors';
import { PrimaryButton } from '../components/UI/PrimaryButton';

export const GameOverScreen = (props) => {
  const { roundsNumber, userNumber, onStartNewGame } = props;

  return (
    <View style={styles.mainContainer}>
      <BasicTitle>Game Over!</BasicTitle>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton size="strech" onPress={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    margin: 36,
    borderWidth: 5,
    borderColor: colors.accent500,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colors.accent500,
  },
});
