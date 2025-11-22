import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Conversation } from '../../constants/Interfaces';
import { MootText } from '../../core/components/MootText';
import { useTheme } from 'react-native-paper';
import { MeshGradientView } from 'expo-mesh-gradient';

export default function MatchesScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  let chats: Conversation[] = [{
    id: '',
    matchId: '',
    userAId: '',
    userBId: '',
    createdAt: '',
    lastMessageAt: null,
    lastMessage: "Test"
  },
  {
    id: '',
    matchId: '',
    userAId: '',
    userBId: '',
    createdAt: '',
    lastMessageAt: null,
    lastMessage: "Test"
  },
  {
    id: '',
    matchId: '',
    userAId: '',
    userBId: '',
    createdAt: '',
    lastMessageAt: null,
    lastMessage: "Test"
  }]

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <MeshGradientView
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        columns={3}
        rows={3}
        colors={['green', 'green', 'green', 'green']}
        points={[
          [1.0, 1.0],
          [0.5, 1.0],
          [0.0, 1.0],
          [1.0, 0.5],
          [0.5, 0.5],
          [0.0, 0.5],
          [1.0, 0.0],
          [0.5, 0.0],
          [0.0, 0.0],
        ]}
      />
      <ScrollView>
        {chats.map(x => [<View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ width: 48, height: 48, backgroundColor: theme.colors.primary, borderRadius: 24 }}>
          </View>
          <View style={{ flex: 1, marginStart: 12 }}>
            <MootText text='Test' />
            <MootText text='Test' />
          </View>
          <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 4, padding: 4 }}>
            <MootText text='Start chat' />
          </View>
        </View>])}
      </ScrollView>
    </View>
  );
}
