import { Pressable, StyleSheet, Text, View } from "react-native";
export interface ResultProps {
    punctuation: number
    amountQuestions: number
    restart: () => void
}

export default function Result(props: Readonly<ResultProps>) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Você acertou</Text>
            <Text style={styles.emphasis}>{Math.round((props.punctuation / props.amountQuestions) * 100)}%</Text>
            <Pressable style={styles.buttom} onPress={props.restart}>
                <Text style={{color: "#fff", fontSize: 20 }}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 10,
        padding: 15
    },
    text: { 
        color:'#bbb',
        fontSize: 20
    },
    emphasis: { 
        color:'#fff',
        fontSize: 60,
        fontWeight: '900'
    },
    buttom: {
        marginTop: 20,
        backgroundColor: "#852e9c",
        padding: 15,
        borderRadius: 5,
        width: "100%",
        alignItems: "center"
    }
})