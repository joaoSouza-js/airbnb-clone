import { forwardRef } from "react";
import BottomSheet, {
    BottomSheetFlatList,
    BottomSheetProps,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { VerticalStack } from "@/components/VerticalStack";
import { ImagesCarouselSlider } from "@/components/ImagesCarouselSlider";
import { HorizontalStack } from "@/components/HorizontalStack";
import { Text } from "@/components/Text";
import { FontAwesome } from "@expo/vector-icons";
import { apartments } from "@/assets/data/apartments";
import { FormatterPrice } from "@/utils/FormatterPrice";
import { Image, useWindowDimensions } from "react-native";
import { Center } from "@/components/Center";

type PlacesBottomSheetProps = BottomSheetProps & {};

export const PlacesBottomSheet = forwardRef<
    BottomSheet,
    PlacesBottomSheetProps
>((props, ref) => {
    const dimensions = useWindowDimensions();
    const placeItemHeight = (30 / 100) * dimensions.height;
    const placeItemWidth = dimensions.width - 48;

    return (
        <BottomSheet ref={ref} {...props}>
            <Center className="mt-1 mb-4">
                <Text>Over {apartments.length} places</Text>
            </Center>

            <BottomSheetFlatList
                data={apartments}
                nestedScrollEnabled
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 24,
                }}
                renderItem={({ item: place }) => (
                    <VerticalStack>
                        <VerticalStack className="overflow-hidden rounded-3xl">
                            <Image
                                source={{
                                    uri: place.images[0],
                                }}
                                style={{
                                    height: placeItemHeight,
                                    width: placeItemWidth,
                                    resizeMode: "cover",
                                }}
                            />
                        </VerticalStack>
                        <VerticalStack className="p-4 pt-3">
                            <VerticalStack className="gap-1">
                                <HorizontalStack className="justify-between items-center gap-3">
                                    <Text
                                        numberOfLines={1}
                                        className="flex-1"
                                        fontFamily="InterMedium"
                                    >
                                        {place.title}
                                    </Text>
                                    <HorizontalStack className="gap-1 items-center">
                                        <FontAwesome
                                            name="star"
                                            size={14}
                                            color={"black"}
                                        />
                                        <Text className="text-black">
                                            {place.rating} (
                                            {place.amountPeopleRate}){" "}
                                        </Text>
                                    </HorizontalStack>
                                </HorizontalStack>

                                <Text
                                    numberOfLines={1}
                                    className="text-gray-500"
                                >
                                    {place.description}
                                </Text>
                            </VerticalStack>

                            <HorizontalStack className="mt-1">
                                <Text fontFamily="InterMedium">
                                    {FormatterPrice.format(place.price)}
                                </Text>
                                <Text className="text-gray-500"> night</Text>
                            </HorizontalStack>
                        </VerticalStack>
                    </VerticalStack>
                )}
            />
        </BottomSheet>
    );
});
