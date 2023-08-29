import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [isVisibleModal, setIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => setIsVisible(true);

  const endAddGoalHandler = () => setIsVisible(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      {
        id: Math.random().toString(),
        text: enteredGoalText,
      },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (itemId) => {
    setCourseGoals((prevGoals) => prevGoals.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#b180f0" onPress={startAddGoalHandler} />
        <GoalInput
          isVisibleModal={isVisibleModal}
          onAddItem={addGoalHandler}
          onCancelAddItem={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, _) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    paddingTop: 60,
    paddingHorizontal: 60,
  },
  goalsContainer: {
    flex: 5,
  },
});
