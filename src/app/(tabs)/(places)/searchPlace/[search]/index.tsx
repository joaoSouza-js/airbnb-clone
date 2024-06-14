import { apartments, placeDetailProps } from "@/assets/data/apartments";
import { Center } from "@/components/Center";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { MapPlaceDetails } from "@/components/pages/searchPlace/MapPlaceDetails";
import { MapPlaceMarker } from "@/components/pages/searchPlace/MapPlaceMarker";
import { Tabs, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import MapView, { Marker, Overlay } from "react-native-maps";
type SearchPlaceScreenProps = {
    search: string;
};

export default function SearchPlace() {
    const { search } = useLocalSearchParams<SearchPlaceScreenProps>();
    const [placeSelected, setPlaceSelected] = useState<placeDetailProps | null>(
        null
    );
    function handleSelectPlace(place: placeDetailProps) {
        setPlaceSelected(place);
    }

    function clearPlaceSelected() {
        setPlaceSelected(null);
    }

    return (
        <VerticalStack className="flex-1">
            <MapView
                onPress={clearPlaceSelected}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="random apartamente"
                    description="random apartamente"
                />
                {apartments.map((apartment) => (
                    <MapPlaceMarker
                        onPress={() => handleSelectPlace(apartment)}
                        key={apartment.id}
                        price={apartment.price}
                        coordinate={{
                            latitude: apartment.latitude,
                            longitude: apartment.longitude,
                        }}
                    />
                ))}
            </MapView>

            {placeSelected && (
                <MapPlaceDetails
                    closePlaceDetails={clearPlaceSelected}
                    data={placeSelected}
                />
            )}
        </VerticalStack>
    );
}
