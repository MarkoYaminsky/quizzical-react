import React from "react";
import "./QuizConfiguration.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../components";
import { useAppDispatch } from "../../redux";
import { submitConfiguration } from "./QuizConfiguration.slice";

interface SubmittedData {
  questionsAmount: string;
  difficulty: string;
}

export const QuizConfiguration: React.FC = () => {
  const transformData = (data: SubmittedData) => {
    let transformedDifficulty: string | null = data.difficulty;

    switch (data.difficulty) {
      case "anyDifficulty":
        transformedDifficulty = null;
        break;
      case "easyDifficulty":
        transformedDifficulty = "easy";
        break;
      case "mediumDifficulty":
        transformedDifficulty = "medium";
        break;
      case "hardDifficulty":
        transformedDifficulty = "hard";
        break;
    }

    return {
      questionsAmount: data.questionsAmount,
      difficulty: transformedDifficulty,
    };
  };

  const dispatcher = useAppDispatch();

  return (
    <div className="quizConfiguration">
      <h1>Configure the quiz</h1>
      <Formik
        initialValues={{ questionsAmount: "", difficulty: "anyDifficulty" }}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            dispatcher(submitConfiguration(transformData(values)));
            resetForm();
          }, 400);
        }}
        validationSchema={Yup.object({
          questionsAmount: Yup.number()
            .min(5, "* Minimum of 5 questions")
            .max(20, "* Maximum of 20 questions")
            .required("* This field is required"),
        })}
      >
        <Form>
          <div className="inputs">
            <div className="numberInput">
              <Field
                name="questionsAmount"
                type="number"
                placeholder="Number of questions"
              />
              <ErrorMessage
                name="questionsAmount"
                component="p"
                className="numberInputError"
              />
            </div>
            <ul className="radioInputs">
              Difficulty
              <li>
                <label>
                  <Field name="difficulty" type="radio" value="anyDifficulty" />
                  Any
                </label>
              </li>
              <li>
                <label>
                  <Field
                    name="difficulty"
                    type="radio"
                    value="easyDifficulty"
                  />
                  Easy
                </label>
              </li>
              <li>
                <label>
                  <Field
                    name="difficulty"
                    type="radio"
                    value="mediumDifficulty"
                  />
                  Medium
                </label>
              </li>
              <li>
                <label>
                  <Field
                    name="difficulty"
                    type="radio"
                    value="hardDifficulty"
                  />
                  Hard
                </label>
              </li>
            </ul>
          </div>
          <Button
            text="Submit"
            fontSize="2rem"
            type="submit"
            animationClass="submit"
            href="/quiz"
          />
        </Form>
      </Formik>
    </div>
  );
};
