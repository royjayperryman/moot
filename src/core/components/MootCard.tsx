import { Card } from 'react-native-paper';

export type CardProps = React.ComponentProps<typeof Card>;

export enum CardMode {
  Primary = 'contained',
  Elevated = 'elevated',
  Outlined = 'outlined',
}

export type MootCardProps = CardProps & {
  title: string;
  cardMode: CardMode;
};

export const MootCard: React.FC<MootCardProps> = ({
  title,
  cardMode,
  ...props
}) => {
  return <Card mode={cardMode} {...props} />;
};
