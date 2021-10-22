import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [titleInput, setTitleInput] = useState("");
	const [amountInput, setAmountInput] = useState("");
	const [dateInput, setDateInput] = useState("");

	const changeTitleHandler = (e) => {
		const text = e.target.value;
		setTitleInput(text);
	};

	const changeAmountHandler = (e) => {
		const text = e.target.value;
		setAmountInput(text);
	};

	const changeDateHandler = (e) => {
		const text = e.target.value;
		setDateInput(text);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: titleInput,
			amount: parseInt(amountInput),
			date: new Date(dateInput),
		};

		props.onSaveExpData(expenseData);
		setTitleInput("");
		setAmountInput("");
		setDateInput("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={titleInput} onChange={changeTitleHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={amountInput}
						min="0.01"
						step="0.01"
						onChange={changeAmountHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={dateInput}
						min="2019-01-01"
						step="2022-12-31"
						onChange={changeDateHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="reset" onClick={props.onCollape}>
					Cancel
				</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
