import { View, ViewProps } from "react-native";
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const CenterStyle = tv({
    base: "items-center justify-center"
});

type CenterStyleProps = VariantProps<typeof CenterStyle>;

type CenterProps = ViewProps & CenterStyleProps;

export const Center = forwardRef<View, CenterProps>(({className,children, ...rest}, ref) => {
   
    return (
        <View 
            ref={ref}
            className={CenterStyle({className})}
             {...rest}
        >
            {children}
        </View>
           
        
    );
});

Center.displayName = "Center"

