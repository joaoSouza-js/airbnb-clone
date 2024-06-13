import { theme } from "@/styles/theme";
import { Tabs } from "expo-router";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function TabsLayout() {
    const iconSize = 24;
    return (
        <>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.red[500],
                    tabBarInactiveBackgroundColor: theme.colors.gray[100],
                    tabBarStyle: {
                        height: 70,
                        paddingTop: 8,
                        backgroundColor: theme.colors.gray[100],
                    },

                    tabBarLabelStyle: {
                        paddingBottom: 16,
                    },
                }}
            >
                <Tabs.Screen
                    name="(places)"
                    options={{
                        title: "explore",
                        tabBarIcon: ({ color }) => (
                            <Feather
                                name="search"
                                color={color}
                                size={iconSize}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="wishList"
                    options={{
                        title: "wishlist",
                        tabBarIcon: ({ color }) => (
                            <Feather
                                name="heart"
                                color={color}
                                size={iconSize}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="trips"
                    options={{
                        title: "trips",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="airbnb"
                                color={color}
                                size={iconSize}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="chat"
                    options={{
                        title: "trips",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="comment-alt"
                                color={color}
                                size={iconSize}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "profile",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="user-circle"
                                color={color}
                                size={iconSize}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
