import React from 'react';
import { Text, View } from 'react-native';
import ProfileSlideshow from '../components/ProfileSlideshow';
import { GlassView } from 'expo-glass-effect';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MootIcons } from '../../constants/MootIcons';
import { useMootTheme } from '../../context/ThemeProvider';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useMootTheme();

  return (
    <View style={{ flex: 1 }}>
      {/* <ProfileSlideshow /> */}
    </View>
  );
}
