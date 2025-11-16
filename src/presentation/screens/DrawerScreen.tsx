import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Linking, View } from "react-native";
import { GlassContainer, GlassView } from 'expo-glass-effect'
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DrawerScreen({ props }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: insets.top }}>

        </View>
    );
}