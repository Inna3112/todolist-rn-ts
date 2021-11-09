import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PropsType = {
  tasks: TaskType[];
};
export const Tasks: React.FC<PropsType> = ({tasks}) => {
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <View style={styles.task}>
          <Text>{task.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  task: {
    backgroundColor: '#eee',
    marginBottom: 2,
    padding: 4,
  },
});

export type TaskType = {
  id: string;
  title: string;
};
