// TodoList.tsx
import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { useTasksContext } from "@/context/TasksContext";


export default function TodoList() {
    const { tasks } = useTasksContext();

    return (
        <FlatList
            data={tasks.filter((item) => !item.completed)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TodoItem item={item} />}
        />
    );
}


