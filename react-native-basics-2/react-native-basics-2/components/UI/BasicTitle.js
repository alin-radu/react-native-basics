import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';

export const BasicTitle = (props) => {
  const { children, customStyle = {} } = props;

  return <Text style={[styles.title, customStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
