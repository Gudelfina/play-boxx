import "./App.css";
import LoginForm from "./components/LoginForm";
import GamePage from "./components/GamePage";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";
import StartPage from "./components/QuizGame/StartPage";
import LandingPage from "./components/LandingPage";
import { ProfilePage } from "./components/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreatorPage from "./components/CreatorPage";
import EditProfilePage from "./components/EditProfilePage";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { persistor } from "./store/store";
import Footer from "./components/Footer";

export default function App() {
	const domain = /https:\/\/[^/]+/;
	const basename = process.env.PUBLIC_URL.replace(domain, "");

<<<<<<< HEAD
  return (
    <BrowserRouter basename={basename}>
      <PersistGate persistor={persistor}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/leaderboard" element={<LeaderBoard />}></Route>
          <Route path="/games" element={<GamePage />}></Route>
          <Route path="/games/quiz" element={<StartPage />}></Route>
          <Route path="/creators" element={<CreatorPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute>
                <EditProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </PersistGate>
    </BrowserRouter>
  );
=======
	return (
		<BrowserRouter basename={basename}>
			<PersistGate persistor={persistor}>
				<NavBar />
				<Routes>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/login" element={<LoginForm />}></Route>
					<Route path="/signup" element={<SignUpForm />}></Route>
					<Route path="/leaderboard" element={<LeaderBoard />}></Route>
					<Route path="/games" element={<GamePage />}></Route>
					<Route path="/games/quiz" element={<StartPage />}></Route>
					<Route path="/creators" element={<CreatorPage />}></Route>
					<Route
						path="/profile"
						element={
							<ProtectedRoute>
								<ProfilePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/profile/edit"
						element={
							<ProtectedRoute>
								<EditProfilePage />
							</ProtectedRoute>
						}
					/>
				</Routes>
				<ToastContainer
					className="toast-position"
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<Footer />
			</PersistGate>
		</BrowserRouter>
	);
>>>>>>> main
}
