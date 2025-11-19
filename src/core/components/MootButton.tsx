import React from "react";
import { Button } from "react-native-paper";

export type ButtonProps = Omit<React.ComponentProps<typeof Button>, "children">;

export enum ButtonMode {
    Primary = "contained",
    Secondary = "contained",
    Test = "text",
    Elevated = "elevated",
    Outlined = "outlined"
}

type CPButtonProps = ButtonProps & {
    title: string;
    buttonMode: ButtonMode;
};

export const MootButton: React.FC<CPButtonProps> = ({
    title,
    buttonMode,
    ...props
}) => {
    return (
        <Button {...props} mode={buttonMode}>{title}</Button>
      );
};