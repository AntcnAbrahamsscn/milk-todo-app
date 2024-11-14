import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, View } from "react-native";

export default function TabLayout() {
    return (
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "white",
                    tabBarStyle: {
                        backgroundColor: "#242d32",
                        padding: 10,
                        borderTopWidth: 0,
                        height: 60,
                    },
                    headerTitle: () => (
                        <Image
                            source={require("../../assets/images/milkit.png")}
                            style={{
                                width: 75,
                                marginTop: 10,
                                resizeMode: "contain",
                            }}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: "#324047",
                        height: 100,
                        borderBottomWidth: 0,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerRight: () => (
                        <View
                            style={{
                                width: 35,
                                height: 35,
                                borderRadius: 50,
                                backgroundColor: "white", 
                                marginRight: 15,
                                marginTop: 10, 
                            }}
                        />
                    ),
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: true,
                        title: "Tasks",

                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={focused ? "list" : "list-outline"}
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="StatsScreen"
                    options={{
                        headerShown: true,
                        title: "Task stats",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? "stats-chart"
                                        : "stats-chart-outline"
                                }
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="aboutScreen"
                    options={{
                        headerShown: true,
                        title: "About",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? "information-circle"
                                        : "information-circle-outline"
                                }
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
            </Tabs>
    );
}
