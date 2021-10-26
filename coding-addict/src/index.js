import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

function Greeting() {
	return <h2>Hello</h2>;
}

ReactDOM.render(
	<React.StrictMode>
		<Greeting />
	</React.StrictMode>,
	document.getElementById("root")
);
