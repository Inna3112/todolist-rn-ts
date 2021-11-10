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
  return (
    <View>
      <Navbar title={'Todolist app'} />
      <InputBlock setTasks={setTasks} tasks={tasks} />
      <Tasks tasks={tasks} />
    </View>
  );
};

export default App;
