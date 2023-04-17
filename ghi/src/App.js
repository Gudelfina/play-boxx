import "./App.css";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";

export default function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<GamePage />}></Route>
				<Route path="/login" element={<LoginForm />}></Route>
				<Route path="/signup" element={<SignUpForm />}></Route>
				<Route path="/leaderboard" element={<LeaderBoard />}></Route>
			</Routes>
		</>
	);
}
