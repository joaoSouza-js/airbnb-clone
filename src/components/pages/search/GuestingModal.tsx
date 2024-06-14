import { VerticalStack } from "@/components/VerticalStack";
import { Modal, ModalProps, Pressable } from "react-native";
import { SearchModalHeader } from "./SearchModalHeader";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { HorizontalStack } from "@/components/HorizontalStack";
import { Feather } from "@expo/vector-icons";
import { useSafeBottom } from "@/hooks/useSafeBottom";
import { Button } from "@/components/Button";
import { useState } from "react";

type GuestingModalProps = ModalProps & {
    closeModal: () => void;
};

export function GuestingModal(props: GuestingModalProps) {
    const { closeModal, visible, ...rest } = props;
    const { safeBottom } = useSafeBottom();
    const [adultGuests, setAdultGuests] = useState(0);

    function increaseAdultGuests() {
        setAdultGuests(state => state + 1);
    }

    function decreaseAdultGuests() {
        setAdultGuests(state => {
             return Math.max(0, state - 1);
        });
    }

   

    return (
        <Modal
            {...rest}
            visible={visible}
            animationType="slide"
            onRequestClose={closeModal}
            transparent
            statusBarTranslucent
        >
            <VerticalStack className="flex-1 bg-gray-100 ">
                <SearchModalHeader closeModal={closeModal} />
                <VerticalStack className="flex-1 bg-white  pt-9 rounded-t-3xl mt-7 px-5">
                    <Heading>Whos' cooming</Heading>

                    <VerticalStack className="mt-10">
                        <HorizontalStack className="justify-between items-center pb-4 border-b border-gray-500">
                            <VerticalStack>
                                <Text>Adults</Text>
                                <Text className="text-gray-700">
                                    Ages 13 or above
                                </Text>
                            </VerticalStack>
                            <HorizontalStack className="items-center gap-3">
                                <Pressable onPress={decreaseAdultGuests} className="size-10 border border-gray-500 rounded-full items-center justify-center">
                                    <Feather
                                        name="minus"
                                        size={18}
                                        color={"#000"}
                                    />
                                </Pressable>
                                <Text>{adultGuests}</Text>
                                <Pressable onPress={increaseAdultGuests} className="size-10 border border-gray-500 rounded-full items-center justify-center">
                                    <Feather
                                        name="plus"
                                        size={18}
                                        color={"#000"}
                                    />
                                </Pressable>
                            </HorizontalStack>
                        </HorizontalStack>
                    </VerticalStack>
                </VerticalStack>
                <HorizontalStack
                    className=" justify-between items-center bg-white px-6 pt-5 "
                    style={{
                        marginTop: "auto",
                        paddingBottom: safeBottom,
                    }}
                >
                    <Pressable onPress={closeModal}>
                        <Text fontSize="large" className="underline">
                            Fechar
                        </Text>
                    </Pressable>
                    <Button
                        textClassName="text-white text-lg"
                        className="bg-black h-20 rounded-lg "
                    >
                        Próximo
                    </Button>
                </HorizontalStack>
            </VerticalStack>
        </Modal>
    );
}
