import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {TaskType} from './Tasks/Tasks';

type PropsType = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

export const InputBlock: React.FC<PropsType> = ({setTasks, tasks}) => {
  const [title, setTitle] = useState('');
  const addTask = () => {
    const newTask = {
      id: Date.now().toString(),
      title,
    };
    setTasks([newTask, ...tasks]);
    setTitle('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        defaultValue={title}
        onChangeText={setTitle}
      />
      <Button title={'+'} onPress={addTask} />
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
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
