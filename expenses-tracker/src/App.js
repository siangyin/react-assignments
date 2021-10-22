import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const initialDATA = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(initialDATA);

	const addExpHandler = (data) => {
		console.log("in app js");
		setExpenses((prevData) => {
			return [data, ...prevData];
		});
	};

	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense onAddExp={addExpHandler} />

			<Expenses items={expenses} />
		</div>
	);
}

export default App;
