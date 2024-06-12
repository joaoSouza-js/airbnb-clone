import {tv, type VariantProps} from "tailwind-variants"
import { View, ActivityIndicator,ViewProps,ActivityIndicatorProps } from "react-native"
import { forwardRef } from "react"
import { Center } from "./Center"

const LoaderStyle = tv({
    base: "flex-1",
    variants: {
        color: {
            primary: "text-green-500",
            secondary: "text-blue-200"   
        },

    },
    defaultVariants: { 
        color: "primary"
    }
})

const colorObject = {
    primary: "text-green-500",
    secondary: "text-white"
}

type LoaderStyleProps = VariantProps<typeof LoaderStyle> 

type LoaderProps = ViewProps & LoaderStyleProps & ActivityIndicatorProps

export const Loader = forwardRef<View, LoaderProps>((props, ref) => {
    const { className, size="large",color="primary", ...rest } = props


    return (
        <Center
            ref={ref}
            className={LoaderStyle({className})}
            {...rest }
        >
            <ActivityIndicator 
                size={size}
                className={`${colorObject[color]}`}
                

            />
        </Center>
    )
})

Loader.displayName = "Loader"