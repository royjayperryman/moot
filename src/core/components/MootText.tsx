import React from 'react';
import { Text } from 'react-native-paper';

export type TextProps = Omit<React.ComponentProps<typeof Text>, 'children'>;

type VariantProp<T> =
  | (T extends string ? (string extends T ? never : T) : never)
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall';

type Weight =
  | '400'
  | 'bold'
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'condensedBold'
  | 'condensed'
  | 'heavy'
  | 'black'
  | undefined;

export type MootTextProps = TextProps & {
  text: string;
  variant?: VariantProp<never> | undefined;
  weight?: Weight;
};

export const MootText: React.FC<MootTextProps> = ({
  text,
  variant,
  weight,
  ...props
}) => {
  return (
    <Text
      variant={variant}
      style={[
        props?.style,
        {
          fontWeight: weight,
        },
      ]}
    >
      {text} {props?.children}
    </Text>
  );
};
