import React, { useEffect, useState } from "react";
import "./QuizQuestion.scss";

import { Field } from "formik";

interface IQuizQuestionProps {
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  questionNumber: number;
  type: string;
  hasAnswered: boolean;
}

export const QuizQuestion: React.FC<IQuizQuestionProps> = (
  props: IQuizQuestionProps
) => {
  const [answers, setAnsweres] = useState<string[]>([]);

  useEffect(() => {
    const answers = [...props.incorrectAnswers, props.correctAnswer].sort(
      (a, b) => 0.5 - Math.random()
    );
    setAnsweres(answers);

    document.querySelector(".question-" + props.questionNumber)!.innerHTML =
      props.question;
    Array.from(
      document.querySelectorAll(".answer-" + props.questionNumber)
    ).forEach((answer, index) => {
      answer.innerHTML = answers[index];
    });
  }, [props.correctAnswer, props.incorrectAnswers, props.question, props.questionNumber]);

  return (
    <div className="quizQuestion">
      <h2 className={"question-" + props.questionNumber}>{props.question}</h2>
      <ul className="quizAnswers">
        <li
          className={
            props.hasAnswered
              ? answers[0] === props.correctAnswer
                ? "correctAnswer"
                : "incorrectAnswer"
              : undefined
          }
        >
          <label
            htmlFor={"question-" + props.questionNumber + "answer-1"}
            className={"answer-" + props.questionNumber}
          ></label>
          <Field
            id={"question-" + props.questionNumber + "answer-1"}
            type="radio"
            name={"question-" + props.questionNumber}
            value={
              answers[0] === props.correctAnswer
                ? "correctAnswer"
                : "incorrectAnswer-1"
            }
          />
        </li>
        <li
          className={
            props.hasAnswered
              ? answers[1] === props.correctAnswer
                ? "correctAnswer"
                : "incorrectAnswer"
              : undefined
          }
        >
          <label
            htmlFor={"question-" + props.questionNumber + "answer-2"}
            className={"answer-" + props.questionNumber}
          ></label>
          <Field
            id={"question-" + props.questionNumber + "answer-2"}
            type="radio"
            name={"question-" + props.questionNumber}
            value={
              answers[1] === props.correctAnswer
                ? "correctAnswer"
                : "incorrectAnswer-2"
            }
          />
        </li>
        {props.type === "multiple" && (
          <>
            <li
              className={
                props.hasAnswered
                  ? answers[2] === props.correctAnswer
                    ? "correctAnswer"
                    : "incorrectAnswer"
                  : undefined
              }
            >
              <label
                htmlFor={"question-" + props.questionNumber + "answer-3"}
                className={"answer-" + props.questionNumber}
              ></label>
              <Field
                id={"question-" + props.questionNumber + "answer-3"}
                type="radio"
                name={"question-" + props.questionNumber}
                value={
                  answers[2] === props.correctAnswer
                    ? "correctAnswer"
                    : "incorrectAnswer-3"
                }
              />
            </li>
            <li
              className={
                props.hasAnswered
                  ? answers[3] === props.correctAnswer
                    ? "correctAnswer"
                    : "incorrectAnswer"
                  : undefined
              }
            >
              <label
                htmlFor={"question-" + props.questionNumber + "answer-4"}
                className={"answer-" + props.questionNumber}
              ></label>
              <Field
                id={"question-" + props.questionNumber + "answer-4"}
                type="radio"
                name={"question-" + props.questionNumber}
                value={
                  answers[3] === props.correctAnswer
                    ? "correctAnswer"
                    : "incorrectAnswer-4"
                }
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
