import React, { useEffect, useState } from "react";
import { Button, QuizQuestion, ModalWindow } from "../../components";
import { useAppSelector } from "../../redux";
import { getQuestions } from "../../services";
import { getQuizConfiguration } from "../QuizConfiguration";
import { Formik, Form } from "formik";
import "./Quiz.scss";

export interface IQuizQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface IAPIResponse {
  response_code: number;
  results: IQuizQuestion[];
}

export const Quiz: React.FC = () => {
  const [apiData, setApiData] = useState<IQuizQuestion[]>();
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState({ scored: 0, total: 0 });
  const [isModalWindowShown, setIsModalWindowShown] = useState(false);
  const formData = useAppSelector(getQuizConfiguration);

  useEffect(() => {
    getQuestions(formData)
      .then((response) => response.data)
      .then((data: IAPIResponse) => setApiData(data.results));
  }, [formData]);

  let initialValues = {};

  const questions = apiData?.map((question, index) => {
    initialValues = {
      ...initialValues,
      ["question-" + index]: "",
    };
    return (
      <QuizQuestion
        key={"question-" + index}
        correctAnswer={question.correct_answer}
        incorrectAnswers={question.incorrect_answers}
        question={question.question}
        questionNumber={index}
        type={question.type}
        hasAnswered={hasAnswered}
      />
    );
  });

  return (
    <div className="quiz">
      <ModalWindow
        message="You must answer all questions to check the results!"
        isShown={isModalWindowShown}
        onClick={() => setIsModalWindowShown((prevState) => !prevState)}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const answers = Object.values(values);
          let hasAnsweredAllQuestions = answers.length === questions?.length;
          if (hasAnsweredAllQuestions) {
            setHasAnswered(hasAnsweredAllQuestions);
            let scored = 0;
            answers.forEach(
              (value) => (scored += value === "correctAnswer" ? 1 : 0)
            );
            setScore({
              scored,
              total: answers.length,
            });
          } else {
            setIsModalWindowShown(true);
          }
        }}
      >
        <Form id="quiz-form">
          {questions}
          <div
            className="quizResults"
            style={hasAnswered ? { width: "55%" } : undefined}
          >
            {hasAnswered && (
              <h2>
                You scored {score.scored}/{score.total} correct answers.
              </h2>
            )}
            {questions && questions.length !== 0 && (
              <Button
                text={hasAnswered ? "Play again" : "Check answers"}
                fontSize="2rem"
                type="submit"
                href={hasAnswered ? "/configuration" : undefined}
                class="submit"
              />
            )}
          </div>
          {questions?.length === 0 && (
            <Button
              text="Configure the quiz"
              fontSize="5rem"
              href={"/configuration"}
              class="submit center"
            />
          )}
        </Form>
      </Formik>
    </div>
  );
};
