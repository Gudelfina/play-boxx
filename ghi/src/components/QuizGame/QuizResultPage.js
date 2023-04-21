import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../store/userSlice";
import { resetGame } from "../../store/quizgameSlice";
import StartPage from "./StartPage";

export default function QuizResultPage() {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);

	const score = useSelector((state) => state.quizgame.score);
	const time_completed = useSelector((state) => state.quizgame.time_completed);
	const [runEffect, setRunEffect] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (runEffect && time_completed) {
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

			postScore();
		} else {
			setRunEffect(true);
		}
	}, [time_completed]);

	return (
		<>
			<div className="container">
				<h1>QUIZ RESULTS</h1>
				<Link to="/leaderboard"> Leaderboard </Link>
			</div>
		</>
	);
}
