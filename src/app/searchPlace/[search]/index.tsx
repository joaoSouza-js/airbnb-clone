import { Heading } from "@/components/Heading"
import {VerticalStack} from "@/components/VerticalStack"
import { useLocalSearchParams } from "expo-router"

type SearchPlaceScreenProps = {
    search: string
}

export default function SearchPlace(){
    const  {search} = useLocalSearchParams<SearchPlaceScreenProps>()
    return (
        <VerticalStack>
            <Heading>look  = {search}</Heading>

        </VerticalStack>
    )
}