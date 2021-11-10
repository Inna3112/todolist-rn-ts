/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Navbar} from './src/Navbar';
import {View} from 'react-native';
import {InputBlock} from './src/InputBlock';
import {Tasks, TaskType} from './src/Tasks/Tasks';

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const addTask = (newTask: TaskType) => {
    setTasks(prevTask => [newTask, ...prevTask]);
  };
  const removeTask = (id: string) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };
  return (
    <View>
      <Navbar title={'Todolist app'} />
      <InputBlock addTask={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </View>
  );
};

export default App;
