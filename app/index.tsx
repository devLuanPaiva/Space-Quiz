import Logo from "@/components/template/Logo";
import Page from "@/components/template/Page";
import Question from "@/components/quiz/Question";
import questions from "@/data/constants/Questions";
import { View } from "react-native";

export default function Index() {
    return (
        <Page>
            <View style={{gap: 40}}>
                <Logo />
                <Question question={questions[0]}/>
            </View>
        </Page>
    )
}
