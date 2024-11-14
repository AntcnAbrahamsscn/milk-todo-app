import React from 'react'
import { FlatList } from 'react-native'
import TodoItem from './TodoItem';
import useStore from '@/store/store';

export default function TodoListCompleted() {
    const { tasks } = useStore();

    // TODO: Lägg till en annan färg när completed tasks renderar.
  return (
    <FlatList
    data={tasks.filter((item) => item.completed)}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <TodoItem item={item} />}
/>
  )
}
