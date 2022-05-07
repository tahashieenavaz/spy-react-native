import { View, Text } from 'react-native';

export default function ShowRulePage({ route }) {
  const { isSpy, theWord } = route.params;

  let toShow = null;
  if (isSpy) {
    toShow = 'You are an SPY!';
  } else {
    toShow = theWord;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        {toShow}
      </Text>
    </View>
  );
}
