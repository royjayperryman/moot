import React from "react";
import { Pressable } from "react-native";

export type PressableProps = Omit<React.ComponentProps<typeof Pressable>, "children">;

type MootPressableProps = PressableProps & {
};

export const MootPressable: React.FC<MootPressableProps> = ({
    children,
    ...props
}) => {
    return (
        <Pressable {...props}>{children}</Pressable>
      );
};