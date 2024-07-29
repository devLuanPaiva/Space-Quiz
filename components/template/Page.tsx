import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
const background = require('@/assets/images/background.jpg');

export interface PageProps {
    children: React.ReactNode
}
export default function Page(props: PageProps) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ opacity: 0.5 }}
            >
                {props.children}
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})