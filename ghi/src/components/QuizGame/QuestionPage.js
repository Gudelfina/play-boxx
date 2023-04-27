import QuestionSet from "./QuestionSet";
import { useSelector } from "react-redux";

export default function QuestionPage(props) {
	const score = useSelector((state) => state.quizgame.score);

	return (
		<div className="">
			<div className="flex justify-center items-center h-[100vh]">
				<div className="container rounded-lg bg-beige">
					<QuestionSet
						restartGame={props.restartGame}
						score={score}
						isStarted={props.isStarted}
						setIsStarted={props.setIsStarted}
						isEndOfGame={props.isEndOfGame}
						setIsEndOfGame={props.setIsEndOfGame}
					/>
				</div>
			</div>
		</div>
	);
}
