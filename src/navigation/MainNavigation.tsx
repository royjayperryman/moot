import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../presentation/screens/SignInScreen";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainDrawer"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
