import React, { useState } from "react";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";

function App() {
	const [allList, setAllList] = useState([{ name: "ken", age: 18 }]);
	const [emptyAlert, setEmptyAlert] = useState(false);
	const [title, setTitle] = useState({
		h2: "Invalid Input",
		para: "Please enter a valid name and age (non-empty values).",
	});

	function handleInput(obj) {
		if (obj === "incomplete data") {
			setEmptyAlert(true);
			setTitle((prevState) => ({ ...prevState, ["h2"]: "Incomplete data" }));
		} else if (obj === "invalid age input") {
			setEmptyAlert(true);
			setTitle({
				h2: "Invalid Age",
				para: "Please enter a valid age.",
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

	function hideAlert() {
		setEmptyAlert(false);
	}
	return (
		<div>
			{emptyAlert && (
				<Alert title={title.h2} content={title.para} handleOkay={hideAlert} />
			)}
			<Form userInput={handleInput} />
			<List>{allListing}</List>
		</div>
	);
}

export default App;
