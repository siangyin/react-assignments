import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import itemArr from "./itemArr";

function ProductList() {
	return (
		<section className="productlist">
			{itemArr.map((item) => {
				return <Product key={item.code} {...item} />;
			})}
			<Product />
		</section>
	);
}

function Product(props) {
	return (
		<article
			className="product"
			onMouseOver={() => {
				console.log(props.model);
			}}
		>
			<img src={props.src} alt={props.model}></img>

			<h1>{props.model}</h1>
			<h4>
				{props.series}: {props.color}
			</h4>

			<h4>
				Price: US$
				{props.price}
			</h4>
			<button
				onClick={() => {
					console.log(props.price);
				}}
			>
				Add to Cart
			</button>
		</article>
	);
}

ReactDOM.render(
	<div>
		<ProductList />
	</div>,
	document.getElementById("root")
);
