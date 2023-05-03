import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/userSlice";
import { formatTime } from "./LeaderBoard";
import { DeleteModal } from "./DeleteModal";
import { useNavigate } from "react-router-dom";

const formatDate = (date) => {
	let date_obj = new Date(date);

	return date_obj.toLocaleDateString("en-us");
};

export const ProfilePage = () => {
	const user = useSelector(selectCurrentUser);
	const [scores, setScores] = useState([]);
	const [isDeleted, setIsDeleted] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function getScores() {
			const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/scores`;

			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Failed to fetch scores");
				}
				const data = await response.json();

				let dataSet = data
					.filter((score) => score.player_id.id === user.id)
					.slice(0, 10);

				setScores(dataSet);
			} catch (e) {
				console.error("Error fetching scores", e);
			}
		}
		getScores();
	}, [user.id, isDeleted]);

	return (
		<div className="h-full bg-beige pb-24">
			<div className="w-full h-full p-7 bg-beige">
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
				<div className="flex justify-center mt-5">
					<button
						className="focus:outline-none text-white bg-navy hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full pt-4 px-5 py-2.5 text-center sm:w-auto"
						onClick={() => navigate("/profile/edit")}>
						Edit
					</button>
				</div>
				<div className="user-info flex flex-col items-center m-7">
					<p className="text-4xl font-bold">
						{user.first_name} {user.last_name}
					</p>
					<p className="text-lg font-semibold">Username: {user.username}</p>
					<p className="text-md font-medium">Email: {user.email}</p>
				</div>
				<div className="text-center text-2xl font-bold mb-2">
					Top 10 Personal Leaderboard
				</div>
				<div className="pb-48 relative overflow-x-auto sm:rounded-lg">
					<table className="w-1/2 text-sm text-left text-gray-500 mx-auto dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-lightpink dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="text-center px-6 py-3">
									Ranking
								</th>
								<th scope="col" className="text-center px-6 py-3">
									Game
								</th>
								<th scope="col" className="text-center px-6 py-3">
									Score
								</th>
								<th scope="col" className="text-center px-6 py-3">
									Time Completed
								</th>
								<th scope="col" className="text-center px-6 py-3">
									Date Played
								</th>
								<th scope="col" className="text-center px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{scores.map((score, index) => {
								return (
									<tr
										className="bg-lighterpink border-b hover:bg-lightpink dark:bg-gray-900 dark:border-gray-700"
										key={score.id}>
										<td className="text-center px-6 py-4">{index + 1}</td>
										<td className="text-center px-6 py-4">
											{score.game_id.name}
										</td>
										<td className="text-center px-6 py-4">{score.score}</td>
										<td className="text-center px-6 py-4">
											{formatTime(score.time_completed)}
										</td>
										<td className="text-center px-6 py-4">
											{formatDate(score.played_on)}
										</td>
										<td className="text-center px-6 py-4">
											<DeleteModal
												isDeleted={isDeleted}
												setIsDeleted={setIsDeleted}
												scoreId={score.id}
											/>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
