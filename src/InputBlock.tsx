import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export const InputBlock = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter your task" />
      <Button title={'+'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  input: {
    height: 40,
    width: 360,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
