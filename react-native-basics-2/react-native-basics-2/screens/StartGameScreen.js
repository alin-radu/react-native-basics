import { StyleSheet, TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export const StartGameScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInput />
      </View>
      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    elevation: 20,
    backgroundColor: 'white',
  },
});
