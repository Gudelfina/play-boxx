import "./App.css";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";
import StartPage from "./components/QuizGame/StartPage";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
        <Route path="/games" element={<GamePage />}></Route>
        <Route path="/games/quiz" element={<StartPage />}></Route>
      </Routes>
    </>
  );
}
