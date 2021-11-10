import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TaskType} from './Tasks';

type PropsType = {
  title: string;
  id: string;
  setTasks: (tasks: TaskType[]) => void;
  tasks: TaskType[];
};
export const Task: React.FC<PropsType> = ({title, id, setTasks, tasks}) => {
  const removeTask = () => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };
  return (
    <TouchableOpacity onPress={removeTask} activeOpacity={0.5}>
      <View style={styles.task} key={+id}>
        <Text>{title}</Text>
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
