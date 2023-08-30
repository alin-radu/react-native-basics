import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colors';

export const PrimaryButton = (props) => {
  const { children, onPress } = props;

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
