import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    questions: [
      { questionText: "JS question 1", answerText: "JS answer 1" },
      { questionText: "JS question 2", answerText: "JS answer 2" },
      { questionText: "JS question 3", answerText: "JS answer 3" },
    ],

    title: "Javascript",
  },
  {
    id: uuidv4(),
    questions: [],
    title: "HTML",
  },
  {
    id: uuidv4(),
    questions: [{ questionText: "CSS question 1", answerText: "CSS answer 1" }],
    title: "CSS",
  },
];
