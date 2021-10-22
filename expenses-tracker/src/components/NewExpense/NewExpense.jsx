import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [hide, setHide] = useState(true);

	const onSaveExpDataHandler = (inputExpData) => {
		const expData = {
			...inputExpData,
			id: Math.random().toString(),
		};
		props.onAddExp(expData);
	};

	function toSwitch() {
		if (hide) {
			setHide(false);
		} else {
			setHide(true);
		}
	}
	return (
		<div className="new-expense">
			{hide ? (
				<button onClick={toSwitch}>Add expense</button>
			) : (
				<ExpenseForm
					onSaveExpData={onSaveExpDataHandler}
					onCollape={toSwitch}
				/>
			)}
		</div>
	);
};

export default NewExpense;
