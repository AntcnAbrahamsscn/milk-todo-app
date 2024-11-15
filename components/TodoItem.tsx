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
    const [expanded, setExpanded] = useState(false); 

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

    const handleToggleExpand = () => setExpanded(!expanded);

    return (
        <TouchableOpacity onPress={handleToggleExpand} style={styles.todoItem}>
            <View style={styles.itemContent}>
                <View style={styles.taskSection}>
                    {expanded && (
                        <TouchableOpacity onPress={handleToggleTodo} style={styles.checkbox}>
                            <Ionicons
                                name={item.completed ? "checkbox" : "square-outline"}
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                    )}
                    {editing ? (
                        <TextInput
                            style={styles.editInput}
                            value={newTaskName}
                            onChangeText={setNewTaskName}
                            placeholder="Edit task..."
                            autoFocus
                        />
                    ) : (
                        <Text style={styles.taskText}>{item.task}</Text>
                    )}
                </View>
                
                {expanded && (
                    <View style={styles.actionButtons}>
                        {editing ? (
                            <TouchableOpacity onPress={handleUpdateTask}>
                                <AntDesign name="save" size={20} color="#E4E1DD" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setEditing(true)}>
                                <Ionicons name="create-outline" size={20} color="#E4E1DD" />
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={handleDeleteTodo}>
                            <Ionicons name="close-outline" size={20} color="#E4E1DD" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: "#338a7e",
        padding: 15,
        marginVertical: 5,
        borderRadius: 3,
        height: 50
    },
    itemContent: { 
        flexDirection: "row", 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskSection: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    checkbox: {
        marginRight: 10,
    },
    taskText: {
        color: "white",
        fontSize: 16,
    },
    editInput: {
        color: "white",
        borderBottomWidth: 1,
        borderColor: 'white',
        fontSize: 16,
    },
    actionButtons: {
        flexDirection: "row",
        gap: 10,
    },
});
