import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import useStore from "@/store/store";
import ITodo from "@/assets/@types/ITodo";

interface TodoItemProps {
    item: ITodo;
}

export default function TodoItem({ item }: TodoItemProps) {
    const { updateTask, toggleTask, deleteTask, count, setCount } = useStore();
    const [newTaskName, setNewTaskName] = useState<string>(item.task);
    const [editing, setEditing] = useState(false);

    const handleUpdateTask = () => {
        updateTask(item.id, newTaskName);
        setEditing(false);
    };

    const handleToggleTodo = () => {
        toggleTask(item.id);
    };

    const handleDeleteTodo = () => {
        deleteTask(item.id);
        if (item.completed) {
            setCount(count + 1);
        }
    };

    return (
        <View style={styles.todoItem}>
            <View style={styles.itemContent}>
                {editing ? (
                    <TextInput
                        style={styles.editInput}
                        value={newTaskName}
                        onChangeText={setNewTaskName}
                    />
                ) : (
                    <View style={styles.taskText}>
                        <TouchableOpacity onPress={handleToggleTodo}>
                            <Ionicons
                                name={item.completed ? "checkbox" : "square-outline"}
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                        <Text style={styles.taskText}>{item.task}</Text>
                    </View>
                )}
            </View>
            {editing ? (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleUpdateTask}>
                        <AntDesign name="save" size={20} color="#E4E1DD" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDeleteTodo}>
                        <AntDesign name="delete" size={20} color="#E4E1DD" />
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity onPress={() => setEditing(true)}>
                    <AntDesign name="edit" size={20} color="#E4E1DD" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: "#338a7e",
        padding: 15,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 3,
    },
    itemContent: { flexDirection: "row", alignItems: "center" },
    taskText: {
        color: "white",
        fontSize: 16,
        marginLeft: 10,
        flexDirection: "row",
    },
    editInput: {
        flex: 1,
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#E4E1DD",
        fontSize: 16,
        marginLeft: 10,
    },
    buttonContainer: { flexDirection: "row", gap: 10 },
});
