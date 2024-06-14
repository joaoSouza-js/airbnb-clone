// Assuming this is the structure of ViewToken

import { ViewToken } from "react-native";

interface ViewableItemsChangedInfo {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

interface ViewableItemsChangedCallback {
    (info: ViewableItemsChangedInfo): void;
}
