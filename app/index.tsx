import Logo from "@/components/template/Logo";
import Page from "@/components/template/Page";
import Question from "@/components/quiz/Question";
import { View } from "react-native";
import useQuiz from "@/data/hooks/useQuiz";
import Result from "@/components/quiz/Result";

export default function Index() {
    const { question, response, completed, punctuation, totalQuestions, restart } = useQuiz()
    return (
        <Page>
            <View style={{ gap: 40 }}>
                <Logo />
                {completed ? (
                    <Result
                        punctuation={punctuation}
                        amountQuestions={totalQuestions}
                        restart={restart}
                    />
                ) : (
                    <Question
                        question={question}
                        optionSelected={response}
                    />
                )}
            </View>
        </Page>
    )
}
