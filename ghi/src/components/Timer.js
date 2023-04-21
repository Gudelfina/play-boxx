import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTimeCompleted } from "../store/quizgameSlice";

export default function Timer(props) {
	const [time, setTime] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTimeCompleted(time));
	}, [props.isEndOfGame]);

	useEffect(() => {
		let interval;
		if (!props.isEndOfGame) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		}
		return () => clearInterval(interval);
	}, [props.isEndOfGame]);

	function timer(time) {
		const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
		const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
		const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
		return `${minutes}:${seconds}:${milliseconds}`;
	}

	return (
		<>
			<div>{timer(time)}</div>
		</>
	);
}
