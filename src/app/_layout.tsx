import { Slot, Stack, router } from "expo-router";
import "@/styles/global.css";
import "dayjs/locale/pt-br"
import dayjs from "dayjs";
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from "@expo-google-fonts/inter";

import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loader } from "@/components/Loader";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler"


dayjs.locale("pt-br")

import { useEffect } from "react";
export default function RootLayout() {
    const [fontIsLoaded, error] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (fontIsLoaded === false) {
        return <Loader className="bg-gray-200" />;
    }

    return (
        <GestureHandlerRootView className="flex-1" >
        
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="search" />
            </Stack>
        </GestureHandlerRootView>
    );
}
