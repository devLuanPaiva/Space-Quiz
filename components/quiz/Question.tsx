import Question from "@/data/interface/Question.interface";
import { View } from "react-native";
import Statement from "./Statement";
import Option from "./Option";

export interface QuestionProps {
    question: Question
    optionSelected: (index: number) => void
}

export default function QuestionComponent(props: Readonly<QuestionProps>) {
    return (
        <View style={{ gap: 25 }}>
            <Statement statement={props.question.statement} />
            <View style={{ gap: 15 }}>
                {props.question.options.map((option, index) => (
                    <Option
                        key={option}
                        index={index}
                        value={option}
                        onPress={() => props.optionSelected(index)}
                    />
                ))}
            </View>
        </View>
    )
}
