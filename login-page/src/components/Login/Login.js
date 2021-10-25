import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

console.log("loaded page runnning js file.");

const emailReducer = (state, action) => {
	return { value: "", isValid: false };
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer);

	// useEffect(() => {
	// 	console.log("empty arr useEffect run only once, first mounted");
	// 	return () => {
	// 		console.log(
	// 			"empty arr useEffect : cleanup run when component is removed from DOM"
	// 		);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	// useEffect hook with callBack and array of dependencies will be called: on initial render (aka mounting-phase) and when any value of the dependencies change.
	// 	// console.log("check form validy");

	// 	// running checking only after 1s (debouncing)
	// 	const identifier = setTimeout(() => {
	// 		// console.log("checking now");
	// 		setFormIsValid(enteredPassword.trim().length > 6 && emailIsValid);
	// 	}, 1000);

	// 	// a clean up function to run before every sideEffect timeout function being execute and does not run before the very first execution, so we only have one timer at a time. We clear timer before new start.
	// 	return () => {
	// 		// console.log("cleanup now");
	// 		clearTimeout(identifier);
	// 	};
	// }, [enteredEmail, enteredPassword]);

	const emailChangeHandler = (event) => {
		setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);

		setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		//validateEmail check if valid email then set email.
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (emailState.value.match(regexEmail)) {
		}
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, enteredPassword);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={enteredPassword}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
