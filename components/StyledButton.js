import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Style from '../style/Style';

export default function StyledButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(233,222,248,255)",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});