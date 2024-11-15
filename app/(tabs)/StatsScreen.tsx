import useStore from "@/store/store";
import { StyleSheet, Text, View } from "react-native";
import TodoListCompleted from "@/components/TodoListCompleted";

export default function StatsScreen() {
    const { count } = useStore();

    return (
        <View style={styles.statsScreen}>
            <View style={styles.container}>
                <Text style={styles.header}>Completed tasks</Text>
                <TodoListCompleted />
                <Text style={styles.header}>Weekly progress</Text>
                <Text>{count}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statsScreen: {
      height: '100%',
      backgroundColor: "#324047"
},
    header: { fontSize: 20, fontWeight: "bold", color: "white", marginTop: 20 },

    container: {
        padding: 15,
        backgroundColor: "#324047",
        justifyContent: "flex-start",
    },
    text: {
        color: "#fff",
    },
});
