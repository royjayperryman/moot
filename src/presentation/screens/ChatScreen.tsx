import React from 'react';
import { View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Conversation } from '../../constants/Interfaces';
import { MootText } from '../../core/components/MootText';
import { useTheme } from 'react-native-paper';
import { MeshGradientView } from 'expo-mesh-gradient';

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  let chats: Conversation[] = [
    {
      id: '',
      matchId: '',
      userAId: '',
      userBId: '',
      createdAt: '',
      lastMessageAt: null,
      lastMessage: 'Test',
    },
    {
      id: '',
      matchId: '',
      userAId: '',
      userBId: '',
      createdAt: '',
      lastMessageAt: null,
      lastMessage: 'Test',
    },
    {
      id: '',
      matchId: '',
      userAId: '',
      userBId: '',
      createdAt: '',
      lastMessageAt: null,
      lastMessage: 'Test',
    },
  ];

  return (
    <ScrollView style={{ marginTop: insets.top }}>
      <MootText
        variant='headlineLarge'
        weight={'400'}
        text='Recent matches'
        style={{ marginHorizontal: 16 }}
      />
      <FlatList
        contentContainerStyle={{ padding: 16, gap: 8, flexGrow: 1 }}
        data={['Test', 'Test']}
        horizontal
        renderItem={() => (
          <View
            style={{
              borderRadius: 24,
              width: 48,
              height: 48,
              backgroundColor: 'red',
            }}
          />
        )}
      />
      {chats.map((x) => [
        <View
          style={{
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              backgroundColor: theme.colors.primary,
              borderRadius: 24,
            }}
          ></View>
          <View style={{ flex: 1, marginStart: 12 }}>
            <MootText text='Test' />
            <MootText text='Test' />
          </View>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 4,
              padding: 4,
            }}
          >
            <MootText text='Start chat' />
          </View>
        </View>,
      ])}
    </ScrollView>
  );
}
