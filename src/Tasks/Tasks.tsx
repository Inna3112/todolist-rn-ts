import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Task} from './Task';

type PropsType = {
  tasks: TaskType[];
};
export const Tasks: React.FC<PropsType> = ({tasks}) => {
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <Task key={+task.id} title={task.title} id={task.id} />
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
    borderRadius: 5,
  },
});

export type TaskType = {
  id: string;
  title: string;
};
