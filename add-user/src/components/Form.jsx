import React, { useState } from "react";
import "./Form.css";
import Button from "./Button";

function Form(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	function handleUsername(e) {
		setUsername(e.target.value);
	}

	function handleAge(e) {
		setAge(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (username.trim().length === 0 || age.trim().length) {
			console.log("incomplete data");
			props.userInput("incomplete data");
		} else if (+age < 1) {
			console.log("invalid age input");
			props.userInput("invalid age input");
		} else {
			const obj = {
				name: username,
				age: +age,
			};
			props.userInput(obj);
		}

		setUsername("");
		setAge("");
	}

	return (
		<form className="card" onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<input
				id="username"
				type="text"
				onChange={handleUsername}
				value={username}
			></input>
			<label htmlFor="userage">Age (Years)</label>
			<input
				id="userage"
				type="number"
				onChange={handleAge}
				value={age}
			></input>
			<Button className="AddBtn" type="submit">
				Add user
			</Button>
		</form>
	);
}

export default Form;
