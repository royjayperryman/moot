import React from 'react';
import { Button, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMootTheme } from '../../context/ThemeProvider';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useMootTheme();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button color={'red'} title='Login' onPress={() => { navigation.navigate('MainDrawer') }} />
    </View>
  );
}
