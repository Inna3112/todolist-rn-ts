import React from 'react';
import {Text, View} from 'react-native';

type PropsType = {
  tasks: TaskType[];
};
export const Tasks: React.FC<PropsType> = ({tasks}) => {
  return (
    <View>
      {tasks.map(task => (
        <Text>{task.title}</Text>
      ))}
    </View>
  );
};

export type TaskType = {
  id: string;
  title: string;
};
