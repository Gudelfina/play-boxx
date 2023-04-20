import React, { useEffect, useState } from "react";
import QuizResultPage from "./QuizResultPage";
import { useDispatch } from "react-redux";
import { incrementScore } from "../../store/quizgameSlice";

export default function QuestionSet(props) {
  const [question, setQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [category, setCategory] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getQuizData = async () => {
      const response = await fetch(
        "https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,history,geography,music,science,society_and_culture,sport_and_leisure&limit=10"
      );
      const data = await response.json();
      if (data) {
        const categoryArray = [];
        const questionArray = [];
        const correctAnswerArray = [];
        const difficultyArray = [];
        const allAnswersArray = [];
        setIsLoading(false);

        data.map((questionObj) => {
          const allAnswers = [];

          categoryArray.push(questionObj.category);
          questionArray.push(questionObj.question);
          correctAnswerArray.push(questionObj.correctAnswer);
          allAnswers.push(questionObj.correctAnswer);
          questionObj.incorrectAnswers.map((answer) => allAnswers.push(answer));
          allAnswersArray.push(allAnswers);

          if (questionObj.difficulty) {
            difficultyArray.push(questionObj.difficulty.toUpperCase());
          }
        });
        setAnswers(allAnswersArray);
        setCategory(categoryArray);
        setQuestion(questionArray);
        setCorrectAnswer(correctAnswerArray);
        setDifficulty(difficultyArray);
      }
    };
    getQuizData();
  }, []);

  useEffect(() => {
    if (currentQuestion > 9) {
      handleQuizEnd();
    }
  }, [currentQuestion]);

  const handleCorrectAnswer = (event) => {
    const value = event.target.value;
    if (value === correctAnswer[currentQuestion]) {
      dispatch(incrementScore());
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleQuizEnd = () => {
    props.setIsEndOfGame(true);
  };

  let numbers = [0, 1, 2, 3];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  let shuffledNumbers = shuffle(numbers);

  return isLoading ? (
    <div>Loading...</div>
  ) : currentQuestion <= 9 ? (
    <>
      <div className="container">
        <div className="text-xl">{question[currentQuestion]}</div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={handleCorrectAnswer}
          value={answers[currentQuestion]?.[shuffledNumbers[0]]}
        >
          {answers[currentQuestion]?.[shuffledNumbers[0]]}
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={handleCorrectAnswer}
          value={answers[currentQuestion]?.[shuffledNumbers[1]]}
        >
          {answers[currentQuestion]?.[shuffledNumbers[1]]}
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={handleCorrectAnswer}
          value={answers[currentQuestion]?.[shuffledNumbers[2]]}
        >
          {answers[currentQuestion]?.[shuffledNumbers[2]]}
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={handleCorrectAnswer}
          value={answers[currentQuestion]?.[shuffledNumbers[3]]}
        >
          {answers[currentQuestion]?.[shuffledNumbers[3]]}
        </button>
        <div>
          {currentQuestion > 0 &&
            (isCorrect ? <p>Correct!</p> : <p>Incorrect!</p>)}
        </div>
        <div>Category: {category[currentQuestion]}</div>
        <div>Difficulty: {difficulty[currentQuestion]}</div>
      </div>
    </>
  ) : (
    <>
      <QuizResultPage />
    </>
  );
}
