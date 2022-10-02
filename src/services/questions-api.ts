import axios from "axios";
import { IQUestionOptions } from "../types";

const http = axios.create({
  baseURL: "https://opentdb.com/api.php",
});

export const getQuestions = async (options: IQUestionOptions) => {
  if (options.difficulty) {
    return await http.get(
      `?amount=${options.questionsAmount}&difficulty=${options.difficulty}`
    );
  } else {
    return await http.get(`?amount=${options.questionsAmount}`);
  }
};
