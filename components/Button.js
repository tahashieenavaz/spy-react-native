import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button({
  title = 'Go',
  textColor = null,
  onPress,
  style,
}) {
  if (!textColor) textColor = '#222';
  return (
    <Pressable style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={{ ...styles.text, color: textColor }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
