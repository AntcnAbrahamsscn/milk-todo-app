// TodoList.tsx
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";
import useStore from "@/store/store";


export default function TodoList() {
    const { tasks, fetchAllTasks } = useStore();

    useEffect(() => {
        fetchAllTasks();
    }, []);


    return (
        <FlatList
            data={tasks.filter((item) => !item.completed)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TodoItem item={item} />}
        />
    );
}


