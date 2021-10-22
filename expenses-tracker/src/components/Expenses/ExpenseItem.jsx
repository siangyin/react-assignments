import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const clickHandler = (e) => {
		setTitle("Update!!");
		const target = e.target;
		return console.log(target);
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
