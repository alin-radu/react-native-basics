import { Text, View } from 'react-native';

export const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
