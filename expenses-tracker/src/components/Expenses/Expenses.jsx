import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	const [yearList, setYearList] = useState("2021");

	const filterChangeHandler = (yr) => {
		setYearList(yr);
	};

	const filterData = props.items.filter((obj) => {
		return obj.date.getFullYear().toString() === yearList;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selectedYr={yearList}
					onFilterYR={filterChangeHandler}
					value={props.onNewData}
				/>
				<ExpensesChart expenses={filterData} />
				<ExpensesList items={filterData} />
			</Card>
		</div>
	);
}
export default Expenses;
