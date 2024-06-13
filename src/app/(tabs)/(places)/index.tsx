import { Button } from "@/components/Button";
import { VerticalStack } from "@/components/VerticalStack";
import { PlacePreview } from "@/components/pages/feed/PlacePreview";
import { useSafeTop } from "@/hooks/useSafeTop";
import { places } from "@/utils/places";
import { FlashList } from "@shopify/flash-list";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { Text } from "@/components/Text";
import { Link } from "expo-router";

export default function Feed() {
    const { safeTop } = useSafeTop();

    return (
        <VerticalStack
            className="flex-1 bg-gray-100 "
            style={{
                paddingHorizontal: 20,
                paddingTop: safeTop,
            }}
        >
            <VerticalStack className="bg-black/15 p-[1px] rounded-full">
                <Link href={"search"} asChild>
                    <Button
                        className="flex-row bg-gray-100 justify-start gap-6 "
                        isTextContent={false}
                    >
                        <Feather name="search" size={20} />
                        <VerticalStack className="gap-1">
                            <Text fontFamily="InterMedium">Where to?</Text>
                            <Text fontSize="small">
                                Anywhere - any week - add guest
                            </Text>
                        </VerticalStack>
                    </Button>
                </Link>
            </VerticalStack>
            <VerticalStack className="mt-8 flex-1">
                <FlashList
                    data={places}
                    ItemSeparatorComponent={() => (
                        <VerticalStack className="size-12" />
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    estimatedItemSize={348}
                    renderItem={({ item: place }) => (
                        <PlacePreview data={place} />
                    )}
                />
            </VerticalStack>
        </VerticalStack>
    );
}
