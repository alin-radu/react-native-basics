import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

export const GuessLogItem = (props) => {
  const { roundNumber, guess } = props;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.accent500,
    borderColor: colors.primary800,
    marginVertical: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    elevation: 5,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
