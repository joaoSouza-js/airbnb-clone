import { Feather } from "@expo/vector-icons";
import {
    TextInput as NativeTextInput,
    TextInputProps as NativeTextInputProps,
    TextProps,
    ViewProps,
} from "react-native";
import { ReactElement, forwardRef,  useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { HorizontalStack } from "./HorizontalStack";
import { VerticalStack } from "./VerticalStack";
import { Text } from "./Text";
import { Colors } from "@/styles/Colors";
import { Control, Controller } from "react-hook-form";

const inputRootStyles = tv({
    base: "flex flex-col gap-2",
});

type inputRootProps = ViewProps & InputStylesProps & {};

function InputRoot({ className, ...rest }: inputRootProps) {
    return (
        <VerticalStack className={inputRootStyles({ className })} {...rest} />
    );
}

function InputLabel({ className, children, ...rest }: TextProps) {
    return (
        <Text className={className} fontSize="small" {...rest}>
            {children}
        </Text>
    );
}

type InputErrorProps = TextProps & InputStylesProps;

function InputError({ className, children, ...rest }: InputErrorProps) {
    return (
        <Text className={className} type="danger" fontSize="extraSmall" {...rest}>
            {children}
        </Text>
    );
}

const inputStyles = tv({
    base: "h-14 rounded-full bg-gray-100 border-2 px-3 py-1  flex items-center justify-center ",
    variants: {
        type: {
            primary: "border-gray-500 transparent",
            secondary: "border-gray-100 ",
        },
        isFocus: {
            true: "border-gray-900",
            false: "",
        },
        isError: {
            true: "border-red-500",
            false: "",
        },
    },

    defaultVariants: {
        type: "secondary",
        isFocus: false,
        isError: false,
    },
});

const InputCoreStyles = tv({
    base: "flex-1 pl-3 ",
    variants: {
        colorType: {
            primary: "text-gray-900",
            secondary: "text-gray-900",
        },
    },
    defaultVariants: {
        colorType: "secondary",
    },
});

type InputCoreStylesProps = VariantProps<typeof InputCoreStyles>;


const InputPlaceHolderColor = {
    primary: "#8E9090",
    secondary: "#8E9090",
};

type InputStylesProps = VariantProps<typeof inputStyles>;

type InputProps = NativeTextInputProps &
    InputStylesProps & InputCoreStylesProps & {
        LeftIcon?: ReactElement;
        inputCoreClassName?: string;
        RightIcon?: ReactElement;
    };

const InputInput = forwardRef<NativeTextInput, InputProps>((props, ref) => {
    const {
        LeftIcon,
        RightIcon,
        type = "secondary",
       
        className,
        colorType = "primary",
        isError,
        ...rest
    } = props;
    const [isFocused, setIsFocused] = useState(false);

    function handleActiveFocusInput() {
        setIsFocused(true);
    }

    function handleRemoveFocusInput() {
        setIsFocused(false);
    }

    return (
        <HorizontalStack
            className={inputStyles({
                className,
                isFocus: isFocused && !isError,
                isError: isError,
                type: type,
            })}
        >
            {LeftIcon && LeftIcon}

            <NativeTextInput
                ref={ref}
                onFocus={handleActiveFocusInput}
                onBlur={handleRemoveFocusInput}
                placeholderTextColor={InputPlaceHolderColor[type]}
                className={InputCoreStyles({
                    colorType: colorType,
                })}
                {...rest}
            />

            {RightIcon && RightIcon}
        </HorizontalStack>
    );
});

type InputPasswordProps = InputProps &
    InputStylesProps & {
        isVisible: boolean;
        changePasswordVisibility: () => void;
    };

const InputPassword = forwardRef<NativeTextInput, InputPasswordProps>(
    (props, ref) => {
        const { isVisible = false, changePasswordVisibility, ...rest } = props;
        return (
            <InputInput
                ref={ref}
                secureTextEntry={!isVisible}
                className="bg-transparent"
                placeholder="sua senha"
                RightIcon={
                    <Feather
                            onPress={changePasswordVisibility}
                            color={Colors.gray[500]}
                            name={isVisible ? "eye" : "eye-off"}
                            size={20}
                        />
                }
                {...rest}
            />
        );
    }
);

type InputControlledProps = InputProps & {
    control: Control<any>;
    name: string;
};

const InputControlled = (props: InputControlledProps) => {
    const {control,name,...rest} = props
    return (
        <Controller
            name={name}
            control={control}
            render={({field: {value,onChange,ref}}) => (
                <InputInput
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    {...rest}
                />
            )}
        />
    )
}


type PasswordInputControlledProps = InputPasswordProps & {
    control: Control<any>;
    name: string;
};

const InputPasswordControlled = (props: PasswordInputControlledProps) => {
    const {control,name,...rest} = props
    return (
        <Controller
            name={name}
            control={control}
            render={({field: {value,onChange,ref}}) => (
                <InputPassword
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    {...rest}
                />
            )}
        />
    )
};


type LengthIndicatorProps = {
    currentLength: number;
    maxLength: number;
    className?: string;
}

function LengthIndicator(props: LengthIndicatorProps){
    const {currentLength,maxLength,className} = props

    return (
        <Text type="emphasis" className={className}>
            {currentLength}/{maxLength}
        </Text>
    )
}


InputPassword.displayName = "InputPassword";
InputInput.displayName = "InputInput";
InputRoot.displayName = "InputRoot";
InputError.displayName = "InputError";
InputControlled.displayName = "InputControlled";
LengthIndicator.displayName = "LengthIndicator";
InputPasswordControlled.displayName = "InputPasswordControlled";


export const Input = {
    Root: InputRoot,
    Input: InputInput,
    Password: InputPassword,
    InputControlled: InputControlled,
    LengthIndicator: LengthIndicator,
    PasswordControlled: InputPasswordControlled,
    Error: InputError,
    Label: InputLabel,
};
