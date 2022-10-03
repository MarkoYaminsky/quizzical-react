import React, { useState } from "react";
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
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
        onSubmit={(values) => {
          dispatcher(submitConfiguration(transformData(values)));
          setHasSubmitted(true);
        }}
        validationSchema={Yup.object({
          questionsAmount: Yup.number()
            .min(4, "* You want a quiz or what? At least 4 questions")
            .max(100, "* Quite enthusiastic, eh? 100. Get it or leave it")
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
                disabled={hasSubmitted}
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
                  <Field
                    name="difficulty"
                    type="radio"
                    value="anyDifficulty"
                    disabled={hasSubmitted}
                  />
                  Any
                </label>
              </li>
              <li>
                <label>
                  <Field
                    name="difficulty"
                    type="radio"
                    value="easyDifficulty"
                    disabled={hasSubmitted}
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
                    disabled={hasSubmitted}
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
                    disabled={hasSubmitted}
                  />
                  Hard
                </label>
              </li>
            </ul>
          </div>
          <Button
            text={hasSubmitted ? "Go to quiz!" : "Submit"}
            fontSize="2rem"
            type="submit"
            class={`submit ${hasSubmitted ? "green" : ""}`}
            href={hasSubmitted ? "/quiz" : undefined}
          />
        </Form>
      </Formik>
    </div>
  );
};
