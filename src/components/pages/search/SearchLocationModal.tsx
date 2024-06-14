import { Center } from "@/components/Center";
import { HorizontalStack } from "@/components/HorizontalStack";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { useSafeBottom } from "@/hooks/useSafeBottom";
import { useSafeTop } from "@/hooks/useSafeTop";
import { locations, recentLocations } from "@/utils/locations";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Modal,
    ModalProps,
    Platform,
    Pressable,
} from "react-native";
import { SearchModalHeader } from "./SearchModalHeader";

type SearchLocationModalProps = ModalProps & {
    closeModal: () => void;
};

export function SearchLocationModal(props: SearchLocationModalProps) {
    const { closeModal, visible, ...rest } = props;
    const [locationSearched, setLocationSearched] = useState<string>("");
    const { safeTop } = useSafeTop();
    const { safeBottom } = useSafeBottom(20);
    function clearLocationSearched() {
        setLocationSearched("");
    }
    return (
        <Modal
            {...rest}
            visible={visible}
            animationType="slide"
            onRequestClose={closeModal}
            statusBarTranslucent
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    flex: 1,
                }}
            >
                <VerticalStack className="flex-1">
                    <SearchModalHeader closeModal={closeModal} />
                    <VerticalStack className="flex-1 bg-gray-100 rounded-t-2xl mt-7 px-5">
                        <Input.Input
                            RightIcon={
                                <Pressable
                                    hitSlop={10}
                                    onPress={clearLocationSearched}
                                    className="size-6 items-center bg-gray-400 rounded-full justify-center"
                                >
                                    <Feather
                                        name="x"
                                        size={16}
                                        color={"white"}
                                    />
                                </Pressable>
                            }
                            LeftIcon={
                                <Feather
                                    name="search"
                                    color={"black"}
                                    size={20}
                                />
                            }
                            autoFocus={visible}
                            value={locationSearched}
                            onChangeText={setLocationSearched}
                            className="bg-gray-100 border-gray-600 rounded-lg"
                            placeholder="Search destination"
                        />

                        {!locationSearched.length && (
                            <VerticalStack className="flex-1">
                                <FlatList
                                    ListHeaderComponent={() => (
                                        <Text className="mb-5">
                                            Recent searches
                                        </Text>
                                    )}
                                    showsVerticalScrollIndicator={false}
                                    data={recentLocations}
                                    contentContainerStyle={{
                                        paddingTop: 20,
                                        flexGrow: 1,
                                        paddingBottom: safeBottom,
                                    }}
                                    keyExtractor={(item) => item.id}
                                    ItemSeparatorComponent={() => (
                                        <Center className="size-6" />
                                    )}
                                    renderItem={({ item: place }) => (
                                        <Pressable>
                                            <HorizontalStack className="gap-4 items-center">
                                                <Center className="size-20 rounded-lg bg-gray-200">
                                                    <Feather
                                                        size={20}
                                                        name="clock"
                                                    />
                                                </Center>
                                                <Text>{place.location}</Text>
                                            </HorizontalStack>
                                        </Pressable>
                                    )}
                                />
                            </VerticalStack>
                        )}

                        {locationSearched.length > 0 && (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={locations}
                                ItemSeparatorComponent={() => (
                                    <Center className="size-6" />
                                )}
                                contentContainerStyle={{
                                    paddingTop: 20,
                                    flexGrow: 1,
                                    paddingBottom: safeBottom,
                                }}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item: place }) => (
                                    <Pressable>
                                        <HorizontalStack className="gap-4 items-center">
                                            <Center className="size-20 rounded-lg bg-gray-200">
                                                <Feather
                                                    size={20}
                                                    name="map-pin"
                                                />
                                            </Center>
                                            <Text>{place.location}</Text>
                                        </HorizontalStack>
                                    </Pressable>
                                )}
                            />
                        )}
                    </VerticalStack>
                </VerticalStack>
            </KeyboardAvoidingView>
        </Modal>
    );
}
