import { useState } from "react";
import axios from "axios";
import "./style-admin.css";
import SideBar from "./SideBar";

export default function AddProduct() {
	const [product, setProduct] = useState({
		code: "",
		label: "",
		price: 1,
		active: true,
		PhotoUrl1: "",
		description: "",
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		const newValue = name === "price" ? parseFloat(value) : value;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: type === "checkbox" ? checked : newValue,
		}));
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			console.log("File loaded", reader.result);
			setProduct((prevProduct) => ({
				...prevProduct,
				PhotoUrl1: reader.result,
			}));
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const { code, label, price, PhotoUrl1, description } = product;

		// Vérifiez que tous les champs requis sont remplis
		if (!code || !label || !price || !PhotoUrl1 || !description) {
			alert("All fields are required.");
			return;
		}

		// Vérifiez le type de données pour le prix
		if (isNaN(price)) {
			alert("Price must be a number.");
			return;
		}

		// Envoyer les données au back-end
		axios
			.post("http://localhost:3001/produits/", product)
			.then((response) => {
				console.log("Product added successfully:", response.data);
				// Réinitialiser le formulaire ou fournir un retour d'information à l'utilisateur
				alert("Product added successfully!");
				setProduct({
					code: "",
					label: "",
					price: 1,
					active: true,
					PhotoUrl1: "",
					description: "",
				});
			})
			.catch((error) => {
				// Gérer les erreurs ici
				alert("There was an error adding the product!");
				console.error("There was an error adding the product!", error);
			});
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
					{/* CONTAINER */}
					<div className="mainContent">
						<form id="productForm" onSubmit={handleSubmit} className="form">
							<div className="formHeader row">
								<h2 className="col-6 text-1 fl">Product Detail</h2>
								<div className="col-2"></div>
								<div className="fr col-4">
									<button
										type="submit"
										className="btnSave bg-1 text-fff text-bold fr"
									>
										Add
									</button>
								</div>
							</div>

							<div className="formBody row">
								<div className="column s-6">
									<label className="inputGroup">
										<span>Name</span>
										<span>
											<input
												type="text"
												name="label"
												value={product.label}
												onChange={handleChange}
											/>
										</span>
									</label>
									<label className="inputGroup">
										<span>Code</span>
										<span>
											<input
												type="text"
												name="code"
												value={product.code}
												onChange={handleChange}
											/>
										</span>
									</label>
									<label className="inputGroup">
										<span>Price</span>
										<span>
											{/* input ype number  */}
											<input
												type="number"
												name="price"
												value={product.price}
												onChange={handleChange}
											/>
										</span>
									</label>
									<label className="inputGroup">
										<span>Active</span>
										<span>
											<input
												type="checkbox"
												name="active"
												checked={product.active}
												onChange={handleChange}
											/>
										</span>
									</label>
								</div>
								<div className="column s-6">
									<label className="inputGroup">
										<span>Image</span>
										<input
											type="hidden"
											name="PhotoUrl1"
											value={product.PhotoUrl1}
										/>
										<span>
											<input
												type="file"
												name="PhotoUrl1"
												onChange={handleFileChange}
											/>
											<img src={product.PhotoUrl1} alt="Product" width={50} />
										</span>
									</label>
								</div>
								<div className="column">
									<label className="inputGroup">
										<span>Description</span>
										<textarea
											name="description"
											value={product.description}
											onChange={handleChange}
										/>
									</label>
								</div>
							</div>
						</form>
					</div>
					{/* END CONTAINER */}
				</div>
			</div>
		</>
	);
}
