import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

function ProductList() {
	return (
		<section>
			<Product />
		</section>
	);
}

function Product() {
	return (
		<article>
			<img
				src="https://i1.adis.ws/i/canon/imageprograf-gp-2000-frt_related-product_65ef16d466354686aa334037d5482ab0"
				alt="pro-2000"
			></img>
			<h3>PRO-2000</h3>
			<p>
				PR0-2000: powerful productivity and great prints. The LUCIA PRO
				12-colour is positioned together and the ink system guarantees richer
				colours and deeper blacks, while the 1.28" print head means faster
				prints without compromising quality.
			</p>
		</article>
	);
}

ReactDOM.render(
	<div>
		<ProductList />
	</div>,
	document.getElementById("root")
);
