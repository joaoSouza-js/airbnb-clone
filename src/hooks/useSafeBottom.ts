import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useSafeBottom(distanceFromBottom = 16) {
    const {bottom} = useSafeAreaInsets()
    const safeBottom = bottom + distanceFromBottom
    return {safeBottom}
}