import { View, ViewProps } from "react-native";
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const HorizontalStackStyle = tv({
    base: "flex-row",
});

type HorizontalStackStyleProps = VariantProps<typeof HorizontalStackStyle>;

type HorizontalStackProps = ViewProps & HorizontalStackStyleProps;

export const HorizontalStack = forwardRef<View, HorizontalStackProps>(({className,...rest}, ref) => {
    
    return (
        <View 
            ref={ref}
            className={HorizontalStackStyle({className})}
            {...rest} 
        />
           
        
    );
});

HorizontalStack.displayName = "HorizontalStack"
