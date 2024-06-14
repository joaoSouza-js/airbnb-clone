import { Center } from "@/components/Center";
import { HorizontalStack } from "@/components/HorizontalStack";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { PLACE_PREVIEW_DTO } from "@/utils/places";
import { useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
    FlatList,
    ImageBackground,
    Pressable,
    ViewToken,
    useWindowDimensions,
} from "react-native";
import { ViewableItemsChangedCallback } from "@/@types/flatList_slide_change_event";


type PlacePreviewProps = {
    data: PLACE_PREVIEW_DTO;
};

export function PlacePreview(props: PlacePreviewProps) {
    const { data: place } = props;

    const [imageIndexVisible, setImageIndexVisible] = useState(0);
    const [placeIsLiked, setPlaceIsLiked] = useState(false);

    const dimension = useWindowDimensions();
    const screenHeight = dimension.height;
    const screenWidth = dimension.width;
    const imagePlacePreviewHeight = (30 / 100) * screenHeight;

    const placeDiscount = (place.discount / 100) * place.price;
    const placeWithDiscount = place.price - placeDiscount;

    const imagesAmountArray = Array.from(
        {
            length: place.images.length,
        },
        (_, index) => index
    );

    const handleSlideImageChange: ViewableItemsChangedCallback = (event) => {
        const item = event.viewableItems[0];
        if (item?.index === null) return;
        setImageIndexVisible(item.index);
    };

    function handleLikePlace() {
        setPlaceIsLiked((state) => !state);
    }

    return (
        <VerticalStack className="">
            <VerticalStack className="rounded-2xl overflow-hidden">
                <FlatList
                    onViewableItemsChanged={handleSlideImageChange}
                    data={place.images}
                    keyExtractor={(item) => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={screenWidth - 40}
                    decelerationRate={"fast"}
                    renderItem={({ item: placeImageUri, index }) => (
                        <Pressable>
                            <ImageBackground
                                source={{
                                    uri: placeImageUri,
                                }}
                                style={[
                                    {
                                        width: screenWidth - 40,
                                        padding: 12,
                                        height: imagePlacePreviewHeight,
                                    },
                                ]}
                                resizeMode="cover"
                            >
                                <Pressable
                                    className="self-end"
                                    onPress={handleLikePlace}
                                    hitSlop={40}
                                >
                                    <FontAwesome
                                        name={
                                            placeIsLiked ? "heart" : "heart-o"
                                        }
                                        color={"#e5e7eb"}
                                        style={{
                                            fontSize: 20,
                                        }}
                                    />
                                </Pressable>

                                <HorizontalStack
                                    className="gap-3 justify-center items-center"
                                    style={{
                                        marginTop: "auto",
                                    }}
                                >
                                    {imagesAmountArray.map((_, index) => (
                                        <Center
                                            key={index}
                                            className={` rounded-full ${
                                                imageIndexVisible === index
                                                    ? "bg-gray-100 size-3"
                                                    : "bg-gray-200 size-2"
                                            }`}
                                        ></Center>
                                    ))}
                                </HorizontalStack>
                            </ImageBackground>
                        </Pressable>
                    )}
                />
            </VerticalStack>

            <HorizontalStack className="mt-3 gap-2 ">
                <Text fontSize="small" className="text-gray-600">
                    {place.bed} bed
                </Text>
                <Text fontSize="small" className="text-gray-600">
                    {place.bedroom} bedroom
                </Text>
            </HorizontalStack>
            <Text numberOfLines={2} className="text-gray-700 mt-1">
                {place.title} ° {place.location}
            </Text>
            <HorizontalStack className="gap-2 mt-2">
                <Text fontFamily="InterBold" className="line-through">
                    ${place.price}
                </Text>
                <Text className="text-gray-700" fontFamily="InterBold">
                    ${placeWithDiscount}
                </Text>
                <Text>/ {place.availablePeriod}</Text>
                <Text className="underline">$220 total</Text>
            </HorizontalStack>
        </VerticalStack>
    );
}
