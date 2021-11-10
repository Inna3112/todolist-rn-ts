import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';
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
    if (title.trim()) {
      setTasks([newTask, ...tasks]);
      setTitle('');
    } else {
      Alert.alert('Enter your task!');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        value={title}
        onChangeText={setTitle}
        autoCorrect={true}
        autoCapitalize={'characters'}
        autoFocus={true}
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
