import { GlassView } from "expo-glass-effect";
import React, { useEffect, useRef, useState } from "react";
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import { CrossfadeImage } from "react-native-crossfade-image";

const images: ImageSourcePropType[] = [
    require('../../../assets/p1.jpeg'),
    require('../../../assets/p2.jpeg'),
    require('../../../assets/p3.jpeg'),
    require('../../../assets/p4.jpeg')

];

const getNextIndex = (i: number, len = images.length) => (i + 1) % len;

export default function ProfileSlideshow() {
    const [ready, setReady] = useState(true);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Prefetch remote images so the first transition never shows a blank
    useEffect(() => {
        let cancelled = false;

        const prefetchAll = async () => {
            try {
                await Promise.all(
                    images
                        .map(s => ("uri" in s ? s.uri : undefined))
                        .filter(Boolean)
                        .map(u => Image.prefetch(u as string))
                );
            } catch {
                // ignore failures; cache best-effort
            } finally {
                if (!cancelled) setReady(true);
            }
        };

        prefetchAll();
        return () => {
            cancelled = true;
        };
    }, []);

    // Stable interval that never depends on index
    useEffect(() => {
        if (!ready) return;
        intervalRef.current = setInterval(() => {
            setIndex(prev => getNextIndex(prev));
        }, 4000); // 3s display + 1s crossfade feel (adjust with duration below)
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [ready]);

    // Fallback while prefetching
    if (!ready) {
        return (
            <View style={styles.loading}>
                <Image
                    source={images[0]}
                    style={styles.fill}
                    resizeMode="cover"
                    blurRadius={20}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CrossfadeImage
                style={styles.fill}
                source={images[index]}
                resizeMode="cover"
                duration={1000}>
            </CrossfadeImage>
            <GlassView glassEffectStyle="regular" style={styles.fill} />
            <View style={styles.content}>
                <CrossfadeImage duration={1000} style={styles.image} source={images[index]} resizeMode="cover" />
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    content: { margin: 16, height: "100%", alignItems: 'center', justifyContent: 'center' }, image: { width: '100%', aspectRatio: 1, borderRadius: 10 },
    container: { flex: 1 },
    fill: {
        position: "absolute",
        width,
        height,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.15)", // optional contrast veil
    },
    loading: {
        flex: 1,
        backgroundColor: "#000",
    },
});