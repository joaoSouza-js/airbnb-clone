import { View, ViewProps } from "react-native";
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const VerticalStackStyle = tv({
    base: "flex-col",
});

type VerticalStackStyleProps = VariantProps<typeof VerticalStackStyle>;

type VerticalStackProps = ViewProps & VerticalStackStyleProps;

export const VerticalStack = forwardRef<View, VerticalStackProps>(({className, ...rest}, ref) => {
    return (
        <View 
            ref={ref}
            className={VerticalStackStyle({className})}
            {...rest} 
        />
           
        
    );
});

VerticalStack.displayName = "VerticalStack"

