import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {View, ViewProps} from "react-native"

const CardStyle = tv({
    base: "bg-gray-800 rounded-lg",
    variants: {
        type: {
            primary: "bg-gray-800",
        },
        size: {
            small: "p-2",
            medium: "p-4",
            large: "p-6",
            extraLarge: "p-8",
            none: "p-0",
        }
    },
    defaultVariants: {
        size: "medium",
        type: "primary"
    }
})

type CardStyleProps = VariantProps<typeof CardStyle>

type CardProps = ViewProps & CardStyleProps

export const Card  = forwardRef<View,CardProps>((props,ref) => {
    const {className,size, ...rest} = props
    return(
        <View
            className={CardStyle({className,size})}
            ref={ref}
            {...rest}
        >

        </View>
    )
})