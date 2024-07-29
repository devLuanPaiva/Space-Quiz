import Question from "@/data/interface/Question.interface";
import {  View } from "react-native";
import Statement from "./Statement";

export interface QuestionProps {
    question: Question
}
export default function Question(props: QuestionProps) {
    return (
        <View >
            <Statement statement={props.question.statement} />
        </View>
    )
}
