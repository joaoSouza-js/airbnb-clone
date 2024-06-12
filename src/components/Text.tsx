import { FontSize } from "@/styles/FontSize";
import { TextColors } from "@/styles/TextColors";
import { theme } from "@/styles/theme";
import { forwardRef } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { tv, type VariantProps } from "tailwind-variants"

const TextStyle = tv({
    base: "text-base font-body",

    variants: {
        fontSize: theme.fontSize,
        type: theme.TextColors,
        fontFamily: theme.fontFamily,
    },

    defaultVariants: {
        fontSize: "medium",
        type: "primary",
        fontFamily: "body"
    }
})

type TextStyleProps = VariantProps<typeof TextStyle>

type TextProps = NativeTextProps & TextStyleProps


export const Text = forwardRef<NativeText, TextProps>((props, ref) => {
    const { className,fontSize, type,fontFamily="body", ...rest } = props
    return (
        <NativeText
            className={TextStyle({ className, fontSize, type })}
            style={{
                fontFamily: theme.fontFamily[fontFamily]
            }}
            ref={ref}
            {...rest}
        />
    )
})

Text.displayName = "Text"
