import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../presentation/screens/HomeScreen';
import MatchesScreen from '../presentation/screens/MatchesScreen';
import ProfileScreen from '../presentation/screens/ProfileScreen';
import { View } from 'react-native';
import { BottomTabs } from './BottomTabs';
import ChatScreen from '../presentation/screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabs {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={MatchesScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
