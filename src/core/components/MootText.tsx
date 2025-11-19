import React from "react";
import { Text } from "react-native-paper";

export type TextProps = React.ComponentProps<typeof Text>;

export type MootTextProps = TextProps & {
  text: string;
};

export const MootText: React.FC<MootTextProps> = ({text, ...props}) => {
  return <Text {...props}>{text} {props.children}</Text>;
};
