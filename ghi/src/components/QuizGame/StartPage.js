import React, { useState } from "react";
import QuestionPage from "./QuestionPage";
import { useDispatch } from "react-redux";
import { resetGame } from "../../store/quizgameSlice";

export default function StartPage() {
	const [isStarted, setIsStarted] = useState(false);
	const [isEndOfGame, setIsEndOfGame] = useState(false);

	const handleQuizStart = () => {
		setIsStarted(true);
	};

	// Passed to QuizResultPage to reset Timer
	const handleRestartGame = () => {
		setIsStarted(false);
		setIsEndOfGame(false);
	};

	const dispatch = useDispatch();

	return isStarted ? (
		<>
			<div className="h-[100vh] wrap">
				<div className="bg-beige">
					<QuestionPage
						isStarted={isStarted}
						setIsStarted={setIsStarted}
						isEndOfGame={isEndOfGame}
						setIsEndOfGame={setIsEndOfGame}
						restartGame={handleRestartGame}
					/>
				</div>
			</div>
		</>
	) : (
		<div className="flex justify-center items-center h-[100vh] wrap">
			<div className="wrap">
				<div className="group flex flex-col justify-between rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
					<div>
						<h3 className="text-center text-5xl font-bold text-lightblue sm:text-5xl">
							10 Question Trivia
						</h3>

						<div className="mt-4 border-t-2 border-gray-100 pt-4">
							<p className="text-center text-xl font-medium uppercase text-gray-500">
								Are you ready?
							</p>
						</div>
					</div>
					<div className="mx-auto mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16">
						<button
							className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							onClick={() => {
								handleQuizStart();
								dispatch(resetGame());
							}}>
							START QUIZ GAME
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
