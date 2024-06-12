import { fontFamily } from "@/styles/FontFamily";
import { FontSize } from "@/styles/FontSize";
import { theme } from "@/styles/theme";
import { forwardRef } from "react";
import { PressableProps, Pressable, ViewComponent } from "react-native";
import { VariantProps, tv } from "tailwind-variants";
import { Text } from "./Text";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { VerticalStack } from "./VerticalStack";

const ButtonStyles = tv({
    base: "rounded-full bg-gray-100 px-5 py-2 flex-row items-center justify-center",
    variants: {
        type: {
            primary: "bg-gray-100 text-gray-900",
            secondary: "bg-gray-100 text-gray-900",
        },
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
        fontColor: theme.TextColors,
    },
    defaultVariants: {
        type: "secondary",
        fontSize: "medium",
        fontFamily: "heading",
        fontColor: "emphasis",
    },
});

type ButtonStylesProps = VariantProps<typeof ButtonStyles>;

type ButtonProps = PressableProps &
    ButtonStylesProps & {
        textClassName?: string;
        children: React.ReactNode;
        isTextContext?: boolean;
        LeftIcon?: React.ReactNode;
        RightIcon?: React.ReactNode;
    };
export const Button = forwardRef<View, ButtonProps>((props, ref) => {
    const {
        children,
        className,
        textClassName,
        fontFamily = "InterMedium",
        isTextContext = true,
        LeftIcon,
        RightIcon,
        fontSize = "medium",
        fontColor = "primary",
        ...rest
    } = props;
    const hasIcon = LeftIcon || RightIcon;
    return (
        <Pressable
            ref={ref}
            className={ButtonStyles({ className, type: "secondary" })}
            {...rest}
        >
            {
                hasIcon && (
                    <VerticalStack className="size-7">
                            {LeftIcon && LeftIcon}
                        
                    </VerticalStack>
                )
            }
            {isTextContext && (
                <Text
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    type={fontColor}
                >
                    {" "}
                    {children}{" "}
                </Text>

            )}
            {!isTextContext && children}

            {
                hasIcon && (
                    <VerticalStack  className="size-7">
                            {RightIcon && RightIcon}
                        
                    </VerticalStack>
                )
            }

            
        </Pressable>
    );
});
