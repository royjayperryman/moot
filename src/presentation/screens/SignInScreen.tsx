import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMootTheme } from '../../context/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { ButtonMode, MootButton } from '../../core/components/MootButton';
import { MootText } from '../../core/components/MootText';
import { GlassContainer, GlassView } from 'expo-glass-effect';
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export default function SignInScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useMootTheme();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1522199710521-72d69614c702" }}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Bottom container wrapper */}
      <View style={styles.bottomWrapper}>

        {/* Blur container */}
        <BlurView intensity={16} tint="light" style={styles.blurContainer}>
          <Image
            source={{ uri: "https://your-logo-url.png" }}
            style={styles.logo}
          />

          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>Join the experience and get started</Text>

          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.smallText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('MainDrawer') }}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end"
  },

  bottomWrapper: {
    width: "100%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: "hidden"
  },

  gradientFade: {
    position: "absolute",
    top: 0,
    height: 80,
    width: "100%",
    zIndex: 1
  },

  blurContainer: {
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "rgba(255,255,255,0.6)"
  },

  logo: {
    width: 72,
    height: 72,
    alignSelf: "center",
    marginBottom: 16
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6
  },

  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 26
  },

  signupBtn: {
    backgroundColor: "#1e88e5",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20
  },

  signupText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600"
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4
  },

  smallText: {
    fontSize: 15,
    color: "#444"
  },

  linkText: {
    fontSize: 15,
    color: "#1e88e5",
    fontWeight: "600"
  }
});