import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PropsType = {
  title: string;
  id: string;
};
export const Task: React.FC<PropsType> = ({title, id}) => {
  return (
    <View style={styles.task} key={+id}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#eee',
    marginBottom: 2,
    padding: 4,
    borderRadius: 5,
  },
});
