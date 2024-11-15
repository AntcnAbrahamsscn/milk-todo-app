// TodoList.tsx
import React, { useEffect } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import useStore from "@/store/store";


export default function TodoList() {
    const { tasks, fetchAllTasks, loading } = useStore();

    useEffect(() => {
        fetchAllTasks();
    }, []);

    if (loading) return <Text>Loading...</Text>;

    return (
        <FlatList 
            data={tasks.filter((item) => !item.completed)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TodoItem item={item} />}
        />
    );
}

