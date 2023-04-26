import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../images/trivia-icon.png";

const GamePage = () => {
	const navigate = useNavigate();

	return (
		<>
			<div
				className=" h-[100vh]  wrap"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<div className="wrap">
					<div className="max-w-2xl mx-auto">
						<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
							<img className="rounded-t-lg" src={icon} alt=""></img>
							<div className="p-5">
								<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
									Quiz Game
								</h5>
								<p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
									Challenging trivia game, try to get the best score and time
									out of 10 questions.
								</p>
								<button
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									onClick={() => navigate("/games/quiz")}>
									Play!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GamePage;
