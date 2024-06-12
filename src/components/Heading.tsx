
import { theme } from "@/styles/theme";
import { forwardRef } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { tv, type VariantProps } from "tailwind-variants"

const HeadingStyle = tv({
    base: "text-2xl font-InterMedium",

    variants: {
        fontSize: theme.fontSize,
        type: theme.TextColors,
        fontFamily: theme.fontFamily,
    },
    

    defaultVariants: {
        fontSize: "2xl",
        type: "primary",
        fontFamily: "heading"
    }
})

type HeadingStyleProps = VariantProps<typeof HeadingStyle>

type HeadingProps = NativeTextProps & HeadingStyleProps


export const Heading = forwardRef<NativeText, HeadingProps>((props, ref) => {
    const { className,fontSize, type,fontFamily="InterMedium", ...rest } = props
    return (
        <NativeText
            className={HeadingStyle({ className, fontSize, type })}
            style={{
                fontFamily: theme.fontFamily[fontFamily]
            }}
            ref={ref}
            {...rest}
        />
    )
})

Heading.displayName = "Heading"