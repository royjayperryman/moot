import React from 'react';
import { Text, View } from 'react-native';
import ProfileSlideshow from '../components/ProfileSlideshow';
import { GlassView } from 'expo-glass-effect';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <ProfileSlideshow />
      <GlassView
        style={{
          position: 'absolute',
          marginTop: insets.top,
          top: 0,
          left: 16,
          right: 16,
          borderRadius: 12,
        }}
      >
        <View style={{ padding: 16 }}>
          <Text>Compatibility</Text>
        </View>
      </GlassView>
    </View>
  );
}
