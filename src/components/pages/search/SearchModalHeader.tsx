import { Center } from "@/components/Center";
import { HorizontalStack } from "@/components/HorizontalStack";
import { useSafeTop } from "@/hooks/useSafeTop";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

type SearchModalHeaderProps = {
    closeModal: () => void;
};

export function SearchModalHeader({closeModal}: SearchModalHeaderProps) {
    const { safeTop } = useSafeTop();
    return (
        <HorizontalStack className="px-5" style={{ paddingTop: safeTop }}>
            <Pressable onPress={closeModal}>
                <Center className="size-8 bg-white rounded-full">
                    <Feather name="arrow-left" size={22} color={"#000"} />
                </Center>
            </Pressable>
        </HorizontalStack>
    );
}
