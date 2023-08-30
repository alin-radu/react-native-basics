import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

export const NumberContainer = (props) => {
  const { children } = props;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    padding: 24,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: colors.primary600,
  },
  text: {
    color: colors.primary600,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
