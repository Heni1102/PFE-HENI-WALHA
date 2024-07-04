import { useState, useEffect } from "react";
import axios from "axios";
import "./style-admin.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/produits/")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the products!", error);
			});
	}, []);
	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this product?")) {
			axios
				.delete(`http://localhost:3001/produits/${id}`)
				.then(() => {
					alert("Product deleted successfully");
					// Optionally, update state to remove the deleted product from the list
					setProducts(products.filter((product) => product.id !== id));
				})
				.catch((error) => {
					console.error("Error deleting product:", error);
				});
		}
	};

	return (
		<>
			<div className="container">
				<SideBar />
				<div className="mainArea">
					{/* BEGIN NAV */}
					<nav className="navTop row">
						<div className="menuIcon fl">
							<span className="fa fa-bars" />
						</div>
						<div className="account fr">
							<div className="name has-submenu">
								SKS Energy
								<span className="fa fa-angle-down" />
							</div>
							<ul className="accountLinks submenu">
								<li>
									<a href="index.html">View website</a>
								</li>
								<li>
									<a href="login.html">
										Log out
										<span className="fa fa-sign-out fr" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
					{/* END NAV */}
					{/* CONTAINER  */}
					<div className="mainContent">
						<div className="formHeader row py-5">
							<h2 className="col-6 text-1 fl">Product List</h2>
							<div className="col-2"></div>
							<div className="fr col-4">
								<button
									type="submit"
									className="btnSave bg-1 text-fff text-bold fr"
								>
									<Link to="/admin/addProduct">
										<a href="#" className="btnAdd fa fa-plus bg-1 text-fff" />
										Add Product
									</Link>
								</button>
							</div>
						</div>
						<div className="table-responsive">
							<table className="table table-bordered table-striped">
								<thead className="bg-1 text-fff">
									<tr>
										<th className="text-center">Code</th>
										<th className="text-center">Libelle</th>
										<th>Description</th>
										<th className="text-center">Active</th>
										<th className="text-center">Prix</th>
										<th className="text-center">EDIT</th>
									</tr>
								</thead>
								<tbody>
									{products.map((product) => (
										<tr key={product.id}>
											<td className="text-center">{product.code}</td>
											<td className="text-center">{product.label}</td>
											<td>{product.description}</td>
											<td className="text-center">
												{product.active ? "Yes" : "No"}
											</td>
											<td className="text-center">{product.price}</td>
											<td className="text-center">
												<Link
													to={`/admin/editProduct/${product.id}`}
													className="btnEdit fa fa-pencil bg-3 text-fff"
												/>
												<button
													className="btnRemove fa fa-trash bg-2 text-fff"
													onClick={() => handleDelete(product.id)}
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					{/* END CONTAINER  */}
				</div>
			</div>
		</>
	);
}
