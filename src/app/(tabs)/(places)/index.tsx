import { VerticalStack } from "@/components/VerticalStack";
import { PlacePreview } from "@/components/pages/feed/PlacePreview";
import { useSafeTop } from "@/hooks/useSafeTop";
import { places } from "@/utils/places";
import { FlashList } from "@shopify/flash-list";

export default function Feed() {
    const { safeTop } = useSafeTop();

    return (
        <VerticalStack
            className="flex-1 bg-gray-100 "
            style={{
                paddingHorizontal: 20,
                paddingTop: safeTop
            }}
        >
            <FlashList
                data={places}
                ItemSeparatorComponent={() => <VerticalStack className="size-12"/>}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                estimatedItemSize={348}
                renderItem={({item: place}) => (

                    <PlacePreview data={place} />
                )}
            />
        </VerticalStack>
    );
}
