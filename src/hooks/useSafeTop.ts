import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useSafeTop(distanceFromTop = 24) {
    const {top} = useSafeAreaInsets()
    const safeTop = top + distanceFromTop
    return {safeTop}
}