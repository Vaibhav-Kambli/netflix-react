import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { auth } from "./firebase";
import {
	useDispatch,
	useSelector,
} from "react-redux";
import {
	logout,
	login,
	selectUser,
} from "./features/userSlice";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(
			(user) => {
				if (user) {
					console.log(user);
					dispatch(
						login({
							uid: user.uid,
							email: user.email,
						})
					);
				} else {
					dispatch(logout());
				}
			}
		);

		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			{!user ? (
				<LoginScreen />
			) : (
				<Router>
					<Switch>
						<Route path="/profile">
							<ProfileScreen />
						</Route>
						<Route path="/">
							<HomeScreen />
						</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
