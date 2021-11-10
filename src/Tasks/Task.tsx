import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TaskType} from './Tasks';

type PropsType = {
  task: TaskType;
  setTasks: (tasks: TaskType[]) => void;
  tasks: TaskType[];
};
export const Task: React.FC<PropsType> = ({task, setTasks, tasks}) => {
  const removeTask = () => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
  };
  return (
    <TouchableOpacity onPress={removeTask} activeOpacity={0.5}>
      <View style={styles.task} key={+task.id}>
        <Text>{task.title}</Text>
      </View>
    </TouchableOpacity>
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
