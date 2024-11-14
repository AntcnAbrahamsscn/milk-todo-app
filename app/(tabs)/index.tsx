// Index.tsx
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TodoList from "@/components/TodoList";
import AddTodoItem from "@/components/AddTodoItem";
import TodoListCompleted from "@/components/TodoListCompleted";
import { ScrollView } from "react-native";


export default function Index() {

    
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Tasks</Text>
                <TodoList  />
                <Text style={styles.header}>Completed tasks</Text>
          {/* TODO: Enbart en komponent för båda och mata in props? */}
                <TodoListCompleted />
            </ScrollView>
            <AddTodoItem/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: { fontSize: 20, fontWeight: "bold", color: "white", marginTop: 20 },
    container: {  padding: 15, backgroundColor: "#324047", marginBottom: 60 },
    mainContainer: {
        backgroundColor: "#324047",
        justifyContent: "space-between",
        height: '100%'
    },    addTodoContainer: { flexDirection: "row", gap: 10, justifyContent: 'flex-end' },
    addTaskInput: {
        flex: 1,
        backgroundColor: "#4a6c6f",
        padding: 8,
        color: "white",
    },
    addButton: { backgroundColor: "#4a6c6f", borderRadius: 3 },
    
});
