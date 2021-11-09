import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.containter}>
      <Text style={styles.text}>Todolist app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    height: 70,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
