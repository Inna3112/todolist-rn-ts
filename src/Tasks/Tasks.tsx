import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Task} from './Task';

type PropsType = {
  tasks: TaskType[];
};
export const Tasks: React.FC<PropsType> = ({tasks}) => {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({item}) => (
        <Task key={item.id} title={item.title} id={item.id} />
      )}
    />
    // <View style={styles.container}>
    //   {tasks.map(task => (
    //     <Task key={+task.id} title={task.title} id={task.id} />
    //   ))}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

export type TaskType = {
  id: string;
  title: string;
};
