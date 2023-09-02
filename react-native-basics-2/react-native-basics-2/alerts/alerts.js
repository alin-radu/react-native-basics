import { Alert } from 'react-native';

export const showIsInvalidNumberAlert = (onConfirmCallback) =>
  Alert.alert(
    'Invalid number!',
    'The entered value has to be a number between 1 and 99.',
    [
      {
        text: 'Okay',
        style: 'destructive',
        onPress: onConfirmCallback,
      },
    ]
  );

export const missleadingAnswearAlert = () =>
  Alert.alert("Don't lie!", 'You know that is wrong...', [
    {
      text: 'Sorry!',
      style: 'cancel',
    },
  ]);
