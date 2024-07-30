import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import React from "react";

export interface StatementProps {
    statement: string
}
export default function Statement(props: Readonly<StatementProps>) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)']} style={styles.background} />
            <Text style={{ color: "#fff" }}> {props.statement} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#852e9c',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        borderRadius: 10,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.8
    }
})