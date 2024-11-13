// TodoItem.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useTasksContext } from "@/context/TasksContext";
import ITodo from "@/assets/@types/ITodo";

interface TodoItemProps {
    item: ITodo;
}

export default function TodoItem({ item }: TodoItemProps) {
    const { tasks, setTasks } = useTasksContext();
    const [newTaskName, setNewTaskName] = useState<string>(item.task);
    const [editing, setEditing] = useState(false);

    const { count, setCount } = useTasksContext();

    const updateTask = () => {
        setTasks(
            tasks.map((task) =>
                task.id === item.id ? { ...task, task: newTaskName } : task
            )
        );
        setEditing(false);
    };

    const toggleTodo = () => {
        setTasks(
            tasks.map((task) =>
                task.id === item.id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTodo = (id: number) => {
        const todoToDelete = tasks.find((task) => task.id === id);
        if (!todoToDelete) {
            return;
        }
        setTasks(tasks.filter((task) => task.id !== id));

        if (todoToDelete.completed === true) {
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
                        <TouchableOpacity onPress={toggleTodo}>
                            <Ionicons
                                name={
                                    item.completed
                                        ? "checkbox"
                                        : "square-outline"
                                }
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
                    <TouchableOpacity onPress={updateTask}>
                        <AntDesign name="save" size={20} color="#E4E1DD" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
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
