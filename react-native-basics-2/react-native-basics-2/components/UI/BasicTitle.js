import { StyleSheet, Text } from 'react-native';

export const BasicTitle = (props) => {
  const { children, customStyle = {} } = props;

  return <Text style={[styles.title, customStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
