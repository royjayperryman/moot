import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigation from "./BottomNavigation";
import AccountScreen from "../presentation/screens/AccountScreen";
import DrawerScreen from "../presentation/screens/DrawerScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front"
      }}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen
        name="Main"
        component={BottomNavigation}
        options={{ title: "Home", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
