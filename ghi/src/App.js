import "./App.css";
import LoginForm from "./LoginForm";
import { Routes, Route } from "react-router-dom";
import GamePage from "./GamePage";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginForm />}></Route>
			<Route path="/games" element={<GamePage />}></Route>
		</Routes>
	);
}
