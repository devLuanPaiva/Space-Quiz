import { Pressable, StyleSheet, Text } from "react-native";

export interface OptionProps {
    index: number;
    value: string;
    onPress: () => void;
}
export default function Option(props: OptionProps){
    return(
        <Pressable style={styles.option} onPress={props.onPress}>
            <Text >{props.value}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    option: {
        backgroundColor:'#2e9d48',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        
    },
    value:{
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    }
})