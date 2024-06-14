import { Center } from "@/components/Center";
import { Text } from "@/components/Text";
import { FormatterPrice } from "@/utils/FormatterPrice";
import { MapMarker, MapMarkerProps, Marker } from "react-native-maps";

type MapPlaceMarkerProps = MapMarkerProps & {
    price: number;
};

export function MapPlaceMarker({price, ...rest}: MapPlaceMarkerProps) {
    return (
        <Marker
          {...rest}
        >
            <Center className="px-3 py-2 bg-white rounded-3xl">
                <Text fontFamily="PoppinsMedium">
                    {FormatterPrice.format(price)}
                </Text>
            </Center>
        </Marker>
    );
}
