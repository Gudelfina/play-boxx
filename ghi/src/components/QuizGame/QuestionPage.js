import QuestionSet from "./QuestionSet";
import Timer from "../Timer";
import { useSelector } from "react-redux";

export default function QuestionPage(props) {
	const score = useSelector((state) => state.quizgame.score);

	return (
		<div className="component-container container ">
			<QuestionSet
				score={score}
				setIsStarted={props.setIsStarted}
				setIsEndOfGame={props.setIsEndOfGame}
			/>
			Score: {score} <br />
			Timer:{" "}
			<Timer
				isEndOfGame={props.isEndOfGame}
				setIsEndOfGame={props.setIsEndOfGame}
				isStarted={props.isStarted}
			/>
		</div>
	);
}
