// Index.tsx
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TodoList from "@/components/TodoList";
import AddTodoItem from "@/components/AddTodoItem";
import { ScrollView } from "react-native";

export default function Index() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>Tasks</Text>
                <TodoList />
            </View>
            <AddTodoItem />
        </View>
    );
}

const styles = StyleSheet.create({
    header: { fontSize: 20, fontWeight: "bold", color: "white", marginTop: 20 },
    container: { padding: 15, backgroundColor: "#324047", marginBottom: 70 },
    mainContainer: {
        backgroundColor: "#324047",
        justifyContent: "space-between",
        height: "100%",
    },
    addTodoContainer: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
    },
    addTaskInput: {
        flex: 1,
        backgroundColor: "#4a6c6f",
        padding: 8,
        color: "white",
    },
    addButton: { backgroundColor: "#4a6c6f", borderRadius: 3 },
});
