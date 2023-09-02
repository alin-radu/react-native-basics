import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colors';

export const BasicCard = (props) => {
  const { summary, children } = props;

  const summaryRender = summary && <Text style={styles.summary}>{summary}</Text>;

  return (
    <View style={styles.mainContainer}>
      {summaryRender}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  summary: {
    fontFamily: 'open-sans',
    color: colors.accent500,
    fontSize: 16,
  },
});
