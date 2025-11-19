import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonMode, MootButton } from '../../core/components/MootButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MatchesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <ScrollView>
        <MootButton title="Test" buttonMode={ButtonMode.Primary} onPress={() => {}}/>
      </ScrollView>
    </View>
  );
}
