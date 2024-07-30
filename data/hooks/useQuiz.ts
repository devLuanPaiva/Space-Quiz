import { useState } from "react";
import AllQuestions from "../constants/Questions";

export default function useQuiz() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [response, setResponse] = useState<number[]>([]);
  const [questions, setQuestions] = useState(sortQuestions());

  function sortQuestions() {
    const shuffledQuestions = [...AllQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
    return shuffledQuestions
  }
  return {
    get question() {
      return questions[indexQuestion];
    },
    get punctuation() {
      return questions
        .map((question) => question.response)
        .map((res, index) => res === response[index])
        .filter(Boolean).length;
    },
    get totalQuestions() {
        return questions.length;
    },
    get completed() {
        return indexQuestion === questions.length
    },
    response(index: number){
        setResponse([...response, index]);
        setIndexQuestion(indexQuestion + 1);
    },
    restart(){
        setIndexQuestion(0);
        setResponse([]);
        setQuestions(sortQuestions());
    }
  };
}
