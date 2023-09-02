import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colors';

export const PrimaryButton = (props) => {
  const { size, children, onPress } = props;

  const sizeStyle = styles[size];

  return (
    <View style={sizeStyle}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  strech: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    overflow: 'hidden',
    margin: 8,
    borderRadius: 28,
  },
  innerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 1.5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

// const styles = StyleSheet.create({
//   outerContainer: {
//     flexDirection: 'row',
//     alignItems: 'stretch',
//     justifyContent: 'center',
//     margin: 8,
//   },
//   innerContainer: {
//     overflow: 'hidden',
//     backgroundColor: colors.primary500,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 28,
//     elevation: 1.5,
//   },
//   text: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   pressed: {
//     opacity: 0.75,
//   },
// });
