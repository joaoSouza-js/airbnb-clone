import { placeDetailProps } from "@/assets/data/apartments";
import { HorizontalStack } from "@/components/HorizontalStack";
import { ImagesCarouselSlider } from "@/components/ImagesCarouselSlider";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { FormatterPrice } from "@/utils/FormatterPrice";
import { Feather, FontAwesome, } from "@expo/vector-icons";
import { Pressable, useWindowDimensions } from "react-native";

type MapPlaceDetailsProps = {
    data: placeDetailProps;
    closePlaceDetails: () => void;
};

export function MapPlaceDetails({ data,closePlaceDetails }: MapPlaceDetailsProps) {
    const dimensions = useWindowDimensions();
    const carouselHeigh = (23 / 100) * dimensions.height;
    return (
        <VerticalStack
            style={{ position: "absolute", bottom: 10, paddingHorizontal: 16 }}
        >
            <VerticalStack className="bg-white rounded-2xl overflow-hidden">
                <ImagesCarouselSlider
                    spacing={32}
                    height={carouselHeigh}
                    images={data.images}
                    HeaderComponent={
                    <HorizontalStack className="gap-3 self-end">
                        <Pressable className="justify-center items-center size-8 rounded-full bg-gray-300">
                            <Feather
                                name="heart"
                                size={18}
                                color={"black"}
                            />
                        </Pressable>

                        <Pressable onPress={closePlaceDetails} className="justify-center items-center size-8 rounded-full bg-gray-300">
                            <Feather
                                name="x"
                                size={18}
                                color={"black"}
                            />
                        </Pressable>
                        
                    </HorizontalStack>}
                />
                <VerticalStack className="p-4 pt-3">
                    <VerticalStack className="gap-1">
                        <HorizontalStack className="justify-between items-center gap-3">
                            <Text numberOfLines={1} className="flex-1" fontFamily="InterMedium">{data.title}</Text>      
                            <HorizontalStack className="gap-1 items-center">
                                <FontAwesome
                                    name="star"
                                    size={14}
                                    color={"black"}
                                />
                                <Text  className="text-black">{data.rating} ({data.amountPeopleRate}) </Text>
                            </HorizontalStack>
                        </HorizontalStack>

                        <Text numberOfLines={1} className="text-gray-500">
                           {data.description}
                        </Text>
                    </VerticalStack>

                    <HorizontalStack className="mt-1">
                        <Text fontFamily="InterMedium">
                            {FormatterPrice.format(data.price)}
                        </Text>
                        <Text className="text-gray-500"> night</Text>
                    </HorizontalStack>
                </VerticalStack>
            </VerticalStack>
        </VerticalStack>
    );
}
