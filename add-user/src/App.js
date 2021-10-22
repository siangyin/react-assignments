import React, { useState } from "react";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";

function App() {
	const [allList, setAllList] = useState([{ name: "ken", age: 18 }]);
	const [error, setError] = useState(null);

	function handleInput(obj) {
		if (obj === "incomplete data") {
			setError({
				h2: "Incomplete data input",
				para: "Please enter a valid name and age (non-empty values).",
			});
		} else if (obj === "invalid age input") {
			setError({
				h2: "Invalid Age",
				para: "Please enter a positive age value.",
			});
		} else {
			setAllList((prevState) => [obj, ...prevState]);
		}
	}

	const allListing = allList.map((obj, i) => {
		return (
			<li key={obj.name + i}>
				{obj.name} ({obj.age} years old)
			</li>
		);
	});

	function hideAlert(e) {
		e.stopPropagation();
		setError(null);
		console.log(e.target);
	}
	return (
		<div>
			{error && (
				<Alert title={error.h2} content={error.para} handleOkay={hideAlert} />
			)}
			<Form userInput={handleInput} />
			<List>{allListing}</List>
		</div>
	);
}

export default App;
