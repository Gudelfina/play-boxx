import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../store/userSlice";
import { formatTime } from "../LeaderBoard";

export default function QuizResultPage(props) {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);

	const time_completed = useSelector((state) => state.quizgame.time_completed);
	const [runEffect, setRunEffect] = useState(false);
	const score = useSelector((state) => state.quizgame.score);
	const navigate = useNavigate();

	useEffect(() => {
		if (time_completed) {
			const postScore = () => {
				const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/scores`;

				const data = {
					score,
					player_id: user.id,
					game_id: 1,
					time_completed: time_completed.toString(),
				};

				const fetchConfig = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				};

				try {
					const response = fetch(url, fetchConfig);

					if (response) {
						console.log("New score created");
					} else {
						throw new Error(
							"Error occurred while posting the score. Try again later"
						);
					}
				} catch (e) {
					console.error("Error occurred:", e.message);
				}
			};
			if (runEffect === false) {
				postScore();
			}
			setRunEffect(true);
		}
	}, [time_completed, runEffect, score, token, user.id]);

	return (
		<>
			<div className="container">
				<h1 className="text-center text-4xl border-b-8">QUIZ RESULTS</h1>
				<div className="text-center text-xl p-5">Score: {score}</div>
				<div className="text-center text-xl pb-5">
					Time Completed: {formatTime(time_completed.toString())}
				</div>
				<div className="grid grid-cols-2 auto-cols-auto text-center">
					<div className="border-r-4">
						<button
							className="text-white bg-navy hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							onClick={() => {
								navigate("/leaderboard");
							}}>
							LEADERBOARD
						</button>
					</div>
					<div className="pl-4">
						<button
							className="text-white bg-navy hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							onClick={() => {
								props.restartGame();
							}}>
							PLAY AGAIN
						</button>
					</div>
				</div>
				<div className="text-center"></div>
			</div>
		</>
	);
}
