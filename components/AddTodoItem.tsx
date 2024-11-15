import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import useStore from "@/store/store";

export default function AddTodoItem() {
    const { createTask } = useStore();
    const [inputText, setInputText] = useState("");

    const addTodo = () => {
        if (inputText.trim().length > 0) {
            createTask({
                id: Date.now(),
                task: inputText,
                completed: false,
            });
            setInputText("");
        }
    };

    return (
        <View style={styles.addTodoContainer}>
            <TextInput
                value={inputText}
                placeholder="Add a task"
                onChangeText={setInputText}
                style={styles.addTaskInput}
            />
            <TouchableOpacity onPress={addTodo} style={styles.addButton}>
                <MaterialIcons name="add" size={40} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addTodoContainer: {
        flexDirection: "row",
        gap: 10,
        padding: 15,
        backgroundColor: "#242d32",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    addTaskInput: {
        flex: 1,
        backgroundColor: "white",
        padding: 8,
        color: "#242d32",
        borderRadius: 4,
    },
    addButton: { backgroundColor: "#4a6c6f", borderRadius: 4 },
});
