import { Button } from "@/components/Button";
import { Center } from "@/components/Center";
import { HorizontalStack } from "@/components/HorizontalStack";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { SearchLocationModal } from "@/components/pages/search/SearchLocationModal";
import { useSafeBottom } from "@/hooks/useSafeBottom";
import { useSafeTop } from "@/hooks/useSafeTop";
import { theme } from "@/styles/theme";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import { Pressable, TouchableOpacity } from "react-native";

export default function search() {
    const { safeTop } = useSafeTop();
    const { safeBottom } = useSafeBottom();
    const [locationSearchModalIsVisible, setLocationSearchModalIsVisible] =
        useState(false);

    function openLocationSearchModal() {
        setLocationSearchModalIsVisible(true);
    }

    function closeLocationSearchModal() {
        setLocationSearchModalIsVisible(false);
    }

    return (
        <VerticalStack
            style={{
                paddingTop: safeTop,
            }}
            className=" flex-1 bg-gray-100"
        >
            <VerticalStack className="p-3 flex-1">
                <HorizontalStack>
                    <Center className="size-8 bg-white rounded-full">
                        <Feather name="x" size={18} color={"#000"} />
                    </Center>
                </HorizontalStack>
                <VerticalStack className="mt-7 gap-4">
                    <Input.Root className="bg-white p-6 rounded-3xl border-black/15">
                        <Input.Label
                            className="text-2xl"
                            style={{
                                fontFamily: theme.fontFamily.InterBold,
                            }}
                        >
                            Where to?
                        </Input.Label>
                        <Button
                            onPress={openLocationSearchModal}
                            LeftIcon={
                                <Feather
                                    name="search"
                                    color={"black"}
                                    size={20}
                                />
                            }
                            className="bg-white border justify-start py-5 border-gray-500 rounded-2xl"
                        >
                            search destination
                        </Button>
                    </Input.Root>

                    <TouchableOpacity activeOpacity={0.7}>
                        <HorizontalStack className="justify-between px-4 py-6 bg-white rounded-2xl">
                            <Text className="text-gray-600">When</Text>
                            <Text fontFamily="InterBold">any week</Text>
                        </HorizontalStack>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}>
                        <HorizontalStack className="justify-between px-4 py-6 bg-white rounded-2xl">
                            <Text className="text-gray-600">Who</Text>
                            <Text fontFamily="InterBold">Any Guest</Text>
                        </HorizontalStack>
                    </TouchableOpacity>
                </VerticalStack>
            </VerticalStack>

            <HorizontalStack
                className=" justify-between items-center bg-white px-6 pt-5 "
                style={{
                    marginTop: "auto",
                    paddingBottom: safeBottom,
                }}
            >
                <Pressable>
                    <Text fontSize="large" className="underline">
                        Clear all
                    </Text>
                </Pressable>
                <Button
                    LeftIcon={
                        <Feather name="search" color={"white"} size={20} />
                    }
                    textClassName="text-white text-lg"
                    className="bg-red-500 h-20 rounded-lg "
                >
                    search
                </Button>
            </HorizontalStack>
            <SearchLocationModal
                visible={locationSearchModalIsVisible}
                closeModal={closeLocationSearchModal}
            />
        </VerticalStack>
    );
}
