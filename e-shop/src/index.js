import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

function ProductList() {
	return (
		<section className="productlist">
			<Product />
			<Product />
		</section>
	);
}

function Product() {
	return (
		<article className="product">
			<img
				src="https://cdn.shopify.com/s/files/1/0978/5112/products/PRO-2100_580x580_02_1_800x.png?v=1593188353"
				alt="pro-2100"
			></img>
			<h1>Pro-521</h1>
			<h4>
				12-colour 24" Professional Photographic Large-Format Inkjet Printer with
				Multifunction Roll System
			</h4>
		</article>
	);
}

ReactDOM.render(
	<div>
		<ProductList />
	</div>,
	document.getElementById("root")
);
