import React from "react";
import "./Alert.css";
import Button from "./Button";

function Alert(props) {
	return (
		<div className="backdrop">
			<div className="alert">
				<header className="header">
					<h2 className="alerth2">{props.title}</h2>
				</header>
				<p className="content">{props.content}</p>
				<Button className="okbtn" onClick={props.handleOkay}>
					Okay
				</Button>
			</div>
		</div>
	);
}

export default Alert;
