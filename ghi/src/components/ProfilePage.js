import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/userSlice";
import { formatTime } from "./LeaderBoard";
import { DeleteModal } from "./DeleteModal";

export const ProfilePage = () => {
	const user = useSelector(selectCurrentUser);
	const [scores, setScores] = useState([]);

	useEffect(() => {
		async function getScores() {
			const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/scores`;

			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Failed to fetch scores");
				}
				const data = await response.json();

				let dataSet = data.filter((score) => score.player_id.id == user.id);

				setScores(dataSet);
			} catch (e) {
				console.error("Error fetching scores", e);
			}
		}
		getScores();
	}, [scores]);

	return (
		<div className="container items-center m-8">
			{user.profile_picture ? (
				<img
					className="rounded-full mx-auto w-36 h-36"
					src={user.profile_picture}
					alt="Extra large avatar"
				/>
			) : (
				<img
					className="rounded-full mx-auto w-36 h-36"
					src="https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png"
					alt="Extra large avatar"
				/>
			)}
			<div className="user-info flex flex-col items-center m-8">
				<p className="text-xl">
					{user.first_name} {user.last_name}
				</p>
				<p className="text-lg">Username: {user.username}</p>
				{/* <p>User ID: {user.id}</p> */}
				<p className="text-md">Email: {user.email}</p>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th>Game</th>
							<th>Score</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						{scores.map((score) => {
							return (
								<tr key={score.id}>
									<td>{score.game_id.name}</td>
									<td>{score.score}</td>
									<td>{formatTime(score.time_completed)}</td>
									<td>
										<DeleteModal scoreId={score.id} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
