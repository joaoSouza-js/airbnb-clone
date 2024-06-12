import { Slot } from "expo-router";
import "@/styles/global.css"
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from "@expo-google-fonts/inter"


import {
    
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins"
import { Loader } from "@/components/Loader";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
export default function RootLayout(){
    const [fontIsLoaded, error] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    if(fontIsLoaded === false){
        return <Loader className="bg-gray-200"/>
    }
    return (
        <>
            <StatusBar
                style="dark"
                translucent
                backgroundColor="transparent"
            />
            <Slot/>
        </>
    )
}