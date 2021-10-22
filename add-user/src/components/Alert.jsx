import React from "react";
import "./Alert.css";
import Button from "./Button";

function Alert(props) {
	return (
		<div className="alert">
			<h2 className="alerth2">{props.title}</h2>
			<p>{props.content}</p>
			<Button className="okbtn" onClick={props.handleOkay}>
				Okay
			</Button>
		</div>
	);
}

export default Alert;
