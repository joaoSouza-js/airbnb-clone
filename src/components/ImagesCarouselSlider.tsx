import { ViewableItemsChangedCallback } from "@/@types/flatList_slide_change_event";
import { Center } from "@/components/Center";
import { HorizontalStack } from "@/components/HorizontalStack";

import { useState } from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    useWindowDimensions,
} from "react-native";

type ImagesCarouselSliderProps = {
    images: string[];
    HeaderComponent?: React.JSX.Element;
    height?: number;
    width?: number;
    spacing?: number;
};

export function ImagesCarouselSlider(props: ImagesCarouselSliderProps) {
    const { images, HeaderComponent, height, width,spacing=0 } = props;

    const [imageIndexVisible, setImageIndexVisible] = useState(0);
    const dimension = useWindowDimensions();
    const screenHeight = dimension.height;
    const screenWidth = width  ?? dimension.width;
    const imagePlacePreviewHeight = height ?? (20 / 100) * screenHeight;


    const imagesAmountArray = Array.from(
        {
            length: images.length,
        },
        (_, index) => index
    );

    const handleSlideImageChange: ViewableItemsChangedCallback = (event) => {
        const item = event.viewableItems[0];
        if (item?.index === null) return;
        setImageIndexVisible(item.index);
    };
    return (
        <FlatList
            onViewableItemsChanged={handleSlideImageChange}
            data={images}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={screenWidth - spacing}
            decelerationRate={"fast"}
            renderItem={({ item: placeImageUri, index }) => (
                <Pressable>
                    <ImageBackground
                        source={{
                            uri: placeImageUri,
                        }}
                        style={[
                            {
                                width: screenWidth - spacing,
                                padding: 12,
                                height: imagePlacePreviewHeight,
                            },
                        ]}
                        resizeMode="cover"
                    >
                        {
                            HeaderComponent && HeaderComponent
                        }

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
    );
}
