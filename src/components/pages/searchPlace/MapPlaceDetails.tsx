import { placeDetailProps } from "@/assets/data/apartments";
import { HorizontalStack } from "@/components/HorizontalStack";
import { ImagesCarouselSlider } from "@/components/ImagesCarouselSlider";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { FormatterPrice } from "@/utils/FormatterPrice";
import { Feather } from "@expo/vector-icons";
import { Pressable, useWindowDimensions } from "react-native";

type MapPlaceDetailsProps = {
    data: placeDetailProps;
};

export function MapPlaceDetails({ data }: MapPlaceDetailsProps) {
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

                        <Pressable className="justify-center items-center size-8 rounded-full bg-gray-300">
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
                        <Text fontFamily="InterMedium">{data.title}</Text>
                        <Text numberOfLines={1} className="text-gray-500">
                            this is the description of the place
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
