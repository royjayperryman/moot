import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { isLiquidGlassAvailable, GlassView } from "expo-glass-effect";
import { Platform, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const BottomTabs = (props: BottomTabBarProps) => {
    const { state, descriptors, navigation } = props;
    const glassSupported = isLiquidGlassAvailable();

    const Container: any = glassSupported && Platform.OS === 'ios'
        ? GlassView
        : View;

    return (
        <View style={{ gap: 8, flexDirection: 'row' }}>
            <Container
                style={styles.glassContainer}
                glassEffectStyle="regular"
                tintColor="#ffffff50"
            >
                <View style={styles.tabRow}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label = options.tabBarLabel ?? options.title ?? route.name;
                        const isFocused = state.index === index;
                        let iconName = 'ellipse';

                        if (route.name === 'Home') {
                            iconName = isFocused ? 'home' : 'home-outline';
                        } else if (route.name === 'Dashboard') {
                            iconName = isFocused ? 'stats-chart' : 'stats-chart-outline';
                        } else if (route.name === 'Profile') {
                            iconName = isFocused ? 'person' : 'person-outline';
                        }

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                style={styles.tabButton}
                            >
                                {/* <Ionicons name={iconName} size={26} color={isFocused ? '#007AFF' : '#8e8e93'} /> */}
                                <Text style={[styles.tabLabel, { color: isFocused ? '#007AFF' : '#8e8e93' }]}>
                                    {label}
                                </Text>
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
    glass1: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    glass2: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    glass3: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    card: {
        flex: 1,
        borderRadius: 24,
        padding: 54,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 3,
    },
    text: { fontSize: 20, fontWeight: "600" },

    screen: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    glassContainerHome: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 32 : 16,
        left: 16,
        right: 0,
        width: 76,
        borderRadius: 32,
        overflow: 'hidden',
        // shadow for iOS & elevation for Android
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
    },
    glassContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 32 : 16,
        left: 16,
        right: 16,
        borderRadius: 32,
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
        paddingVertical: 22,
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