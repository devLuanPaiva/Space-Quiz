import Question from "@/data/interface/Question.interface";
import { View } from "react-native";
import Statement from "./Statement";
import Option from "./Option";

export interface QuestionProps {
    question: Question
}
export default function Question(props: QuestionProps) {
    return (
        <View style={{gap: 25}}>
            <Statement statement={props.question.statement} />
            <View style={{gap: 10}}>
                {props.question.options.map((option, index) => (
                    <Option key={index} index={index} value={option} onPress={() => { }} />
                ))}
            </View>
        </View>
    )
}
