import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { isLiquidGlassAvailable, GlassView } from 'expo-glass-effect';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MootIcons } from '../constants/MootIcons';
import React from 'react';
import { useTheme } from 'react-native-paper';

export const BottomTabs = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  const glassSupported = isLiquidGlassAvailable();
  const theme = useTheme();

  const Container: any =
    glassSupported && Platform.OS === 'ios' ? GlassView : View;

  return (
    <View style={{ gap: 8, flexDirection: 'row' }}>
      <Container
        style={styles.glassContainer}
        glassEffectStyle="regular"
        tintColor={'rgba(193, 132, 11, 0.25)'}
      >
        <View style={styles.tabRow}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel ?? options.title ?? route.name;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const focusColor = 'orange';
            const unfocusColor = 'white';

            const getIcon = (label, isFocused) => {
              switch (label) {
                case 'Home':
                  return (
                    <MootIcons.Home
                      width={24}
                      height={24}
                      fill={isFocused ? focusColor : unfocusColor}
                    />
                  );
                case 'Explore':
                  return (
                    <MootIcons.Fire
                      width={24}
                      height={24}
                      fill={isFocused ? focusColor : unfocusColor}
                    />
                  );
                case 'Chat':
                  return (
                    <MootIcons.Chat
                      width={24}
                      height={24}
                      fill={isFocused ? focusColor : unfocusColor}
                    />
                  );
                case 'Profile':
                  return (
                    <MootIcons.HeartSearch
                      width={24}
                      height={24}
                      fill={isFocused ? focusColor : unfocusColor}
                    />
                  );
                case 'Account':
                  return (
                    <MootIcons.AccountBoxEditOutline
                      width={24}
                      height={24}
                      fill={isFocused ? focusColor : unfocusColor}
                    />
                  );
              }
            };

            return (
              <TouchableOpacity key={route.key} onPress={onPress}>
                {getIcon(label, isFocused)}
              </TouchableOpacity>
            );
          })}
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 12,
  },
  cardContainer: {
    margin: 6,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  glassContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 32 : 16,
    left: 16,
    right: 16,
    borderRadius: 245,
    overflow: 'hidden',
    // shadow for iOS & elevation for Android
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 18,
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});
