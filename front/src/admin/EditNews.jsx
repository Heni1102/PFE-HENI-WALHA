import { useEffect, useState } from "react";
import axios from "axios";
import "./style-admin.css";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "./SideBar";

export default function EditNews() {
	const navigate = useNavigate();
	const [news, setNews] = useState({
		title: "",
		active: true,
		PhotoUrl: "",
		description: "",
	});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:3001/news/${id}`)
			.then((response) => {
				setNews(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the produit!", error);
			});
	}, [id]);
	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setNews((prevNews) => ({
			...prevNews,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			console.log("File loaded", reader.result);
			setNews((prevNews) => ({
				...prevNews,
				PhotoUrl: reader.result,
			}));
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const { title, PhotoUrl } = news;

		// Vérifiez que tous les champs requis sont remplis
		if (!title || !PhotoUrl) {
			alert("All fields are required.");
			return;
		}

		// Envoyer les données au back-end
		axios
			.patch(`http://localhost:3001/news/${id}`, news)
			.then(() => {
				alert("News edited successfully!");
				navigate("/admin/news");
			})
			.catch((error) => {
				// Gérer les erreurs ici
				alert("There was an error adding the news!");
				console.error("There was an error adding the news!", error);
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
								<h2 className="col-6 text-1 fl">Edit News</h2>
								<div className="col-2"></div>
								<div className="fr col-4">
									<button
										type="submit"
										className="btnSave bg-1 text-fff text-bold fr"
									>
										Edit
									</button>
								</div>
							</div>

							<div className="formBody row">
								<div className="column s-6">
									<label className="inputGroup">
										<span>Title</span>
										<span>
											<input
												type="text"
												name="title"
												value={news.title}
												onChange={handleChange}
											/>
										</span>
									</label>{" "}
									<label className="inputGroup">
										<span>Active</span>
										<span>
											<input
												type="checkbox"
												name="active"
												checked={news.active}
												onChange={handleChange}
											/>
										</span>
									</label>
									<label className="inputGroup">
										<span>Description</span>
										<textarea
											name="description"
											value={news.description}
											onChange={handleChange}
										/>
									</label>
								</div>
								<div className="column s-6">
									<label className="inputGroup">
										<span>Image</span>
										<input
											type="hidden"
											name="PhotoUrl1"
											value={news.PhotoUrl1}
										/>
										<span>
											<input
												type="file"
												name="PhotoUrl1"
												onChange={handleFileChange}
											/>
											<img src={news.PhotoUrl1} alt="news" width={50} />
										</span>
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
