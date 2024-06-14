import {
    Dimensions,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from "react-native";
import GreetingWallPaper from "@/assets/images/greetingWallpaper.jpg";
import { useSafeTop } from "@/hooks/useSafeTop";
import { Heading } from "@/components/Heading";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/components/Input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/styles/theme";
import { VerticalStack } from "@/components/VerticalStack";
import { Button } from "@/components/Button";
import { Link, router } from "expo-router";
import { useEffect } from "react";
export default function Root() {
    const { colors } = theme;
    const { safeTop } = useSafeTop(8);
    const dimensions = useWindowDimensions();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <VerticalStack
                    className="flex-1 bg-black"
                    style={{
                        paddingTop: safeTop,
                    }}
                >
                    <ImageBackground
                        imageStyle={{
                            height: dimensions.height,
                            width: dimensions.width,
                            borderRadius: 20,
                        }}
                        style={{ paddingHorizontal: 24, paddingTop: 20 }}
                        source={GreetingWallPaper}
                        resizeMode="cover"
                    >
                        <StatusBar
                            style="light"
                            translucent
                            backgroundColor="transparent"
                        />
                        <Link href={"(tabs)"} asChild>
                            <Button
                                className="h-16"
                                LeftIcon={
                                    <Feather
                                        name="search"
                                        size={24}
                                        color={colors.red[500]}
                                    />
                                }
                            >
                                Explore nearby stays
                            </Button>
                        </Link>

                        {/* <Input.Input
                            placeholderTextColor={colors.gray[900]}
                            onChangeText={handleSearch}
                            className="h-16 pl-8"
                            LeftIcon={
                                <Feather
                                    name="search"
                                    size={24}
                                    color={colors.red[500]}
                                />
                            }
                            placeholder="Where are you going?"
                        /> */}
                        <VerticalStack className="mt-20">
                            <Heading type="secondary" className="text-8xl">
                                Go {"\n"}near
                            </Heading>
                            <Button className="self-start rounded-lg mt-10">
                                Explore nearby stays
                            </Button>
                        </VerticalStack>
                    </ImageBackground>
                </VerticalStack>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
