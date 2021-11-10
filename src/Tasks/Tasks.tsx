import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Task} from './Task';

type PropsType = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};
export const Tasks: React.FC<PropsType> = ({tasks, setTasks}) => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id}
      data={tasks}
      renderItem={({item}) => (
        <Task task={item} setTasks={setTasks} tasks={tasks} />
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
