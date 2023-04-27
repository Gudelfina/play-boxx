import React, { useEffect, useState } from "react";
import QuizResultPage from "./QuizResultPage";
import { useDispatch } from "react-redux";
import { incrementScore } from "../../store/quizgameSlice";
import Timer from "../Timer";
import { useSelector } from "react-redux";

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

	const score = useSelector((state) => state.quizgame.score);

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

				data.forEach(function (questionObj) {
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

	const endGame = props.setIsEndOfGame;

	useEffect(() => {
		const handleQuizEnd = () => {
			endGame(true);
		};
		if (currentQuestion > 9) {
			handleQuizEnd();
		}
	}, [currentQuestion, endGame]);

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
		<div className="text-center mx-auto">Loading...</div>
	) : currentQuestion <= 9 ? (
		<>
			<div className="grid">
				<div className="text-2xl text-center">
					Question: {currentQuestion + 1}/10
				</div>
				<div className="inline-flex text-lg">
					Timer:{" "}
					<Timer
						isEndOfGame={props.isEndOfGame}
						setIsEndOfGame={props.setIsEndOfGame}
						isStarted={props.isStarted}
					/>
				</div>
				<div className="text-lg">Score: {score}</div>
				<div className="text-lg">Category: {category[currentQuestion]}</div>
				<div className="text-lg">Difficulty: {difficulty[currentQuestion]}</div>
				<div className="text-lightblue pt-6 pb-6 text-center text-3xl">
					{question[currentQuestion]}
				</div>
				<div className="pb-5 text-lg text-center">
					{currentQuestion > 0 &&
						(isCorrect ? (
							<p style={{ color: "green" }}>Correct!</p>
						) : (
							<p style={{ color: "red" }}>Incorrect!</p>
						))}
				</div>

				<button
					className="text-center text-white bg-darkerhoverpink hover:bg-hoverpink focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
					onClick={handleCorrectAnswer}
					value={answers[currentQuestion]?.[shuffledNumbers[0]]}>
					{answers[currentQuestion]?.[shuffledNumbers[0]]}
				</button>
				<button
					className="text-center text-white bg-darkerhoverpink hover:bg-hoverpink focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
					onClick={handleCorrectAnswer}
					value={answers[currentQuestion]?.[shuffledNumbers[1]]}>
					{answers[currentQuestion]?.[shuffledNumbers[1]]}
				</button>
				<button
					className="text-center text-white bg-darkerhoverpink hover:bg-hoverpink focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
					onClick={handleCorrectAnswer}
					value={answers[currentQuestion]?.[shuffledNumbers[2]]}>
					{answers[currentQuestion]?.[shuffledNumbers[2]]}
				</button>
				<button
					className="text-center text-white bg-darkerhoverpink hover:bg-hoverpink focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
					onClick={handleCorrectAnswer}
					value={answers[currentQuestion]?.[shuffledNumbers[3]]}>
					{answers[currentQuestion]?.[shuffledNumbers[3]]}
				</button>
			</div>
		</>
	) : (
		<>
			<QuizResultPage
				restartGame={props.restartGame}
				setIsStarted={props.setIsStarted}
				setIsEndOfGame={props.isEndOfGame}
			/>
		</>
	);
}
