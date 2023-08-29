import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = (props) => {
  const { id, text, onDeleteItem } = props;

  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.25,
  },
  goalItemText: {
    padding: 8,
    color: 'white',
  },
});
