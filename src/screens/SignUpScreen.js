import React, { useRef } from "react";
import "../css/SignUpScreen.css";
import { auth } from "../firebase";

const SignUpScreen = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((user) => {
				console.log(user);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((user) => {
				console.log(user);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<div className="signUpScreen">
			<form>
				<h1>Sign In</h1>
				<input
					ref={emailRef}
					type="email"
					placeholder="Email or phone number"
				></input>
				<input
					ref={passwordRef}
					type="password"
					placeholder="Password"
				></input>

				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signUpScreen__gray">
						New to Netflix?
					</span>{" "}
					<span
						onClick={register}
						className="signUpScreen__link"
					>
						Sign up now.
					</span>
				</h4>
			</form>
		</div>
	);
};

export default SignUpScreen;
