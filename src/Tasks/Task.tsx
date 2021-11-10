import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TaskType} from './Tasks';

type PropsType = {
  task: TaskType;
  removeTask: (id: string) => void;
};
export const Task: React.FC<PropsType> = ({task, removeTask}) => {
  const removeTaskHandler = () => {
    removeTask(task.id);
  };
  return (
    <TouchableOpacity onPress={removeTaskHandler} activeOpacity={0.5}>
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
