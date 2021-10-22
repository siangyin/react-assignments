import React from "react";
import "./List.css";

function List(props) {
	return <ul className="card">{props.children}</ul>;
}

export default List;
