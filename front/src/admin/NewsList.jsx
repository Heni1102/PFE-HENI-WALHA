import { useState, useEffect } from "react";
import axios from "axios";
import "./style-admin.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function NewsList() {
	const [listnews, setListnews] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/news/")
			.then((response) => {
				setListnews(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the news!", error);
			});
	}, []);
	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this news?")) {
			axios
				.delete(`http://localhost:3001/news/${id}`)
				.then(() => {
					alert("news deleted successfully");
					// Optionally, update state to remove the deleted product from the list
					setListnews(listnews.filter((n) => n.id !== id));
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
							<h2 className="col-6 text-1 fl">News List</h2>
							<div className="col-2"></div>
							<div className="fr col-4">
								<button
									type="submit"
									className="btnSave bg-1 text-fff text-bold fr"
								>
									<Link to="/admin/addNews">
										<a href="#" className="btnAdd fa fa-plus bg-1 text-fff" />
										Add News
									</Link>
								</button>
							</div>
						</div>
						<div className="table-responsive">
							<table className="table table-bordered table-striped">
								<thead className="bg-1 text-fff">
									<tr>
										<th className="text-center">ID</th>
										<th className="text-center">TITLE</th>
										<th className="text-center">DESCRIPTION</th>
										<th className="text-center">ACTIVE</th>
										<th className="text-center">Actions</th>
									</tr>
								</thead>
								<tbody>
									{listnews.map((news) => (
										<tr key={news.id}>
											<td className="text-center">{news.title}</td>
											<td className="text-center">{news.description}</td>
											<td>{news.description}</td>
											<td className="text-center">
												{news.active ? "Yes" : "No"}
											</td>

											<td className="text-center">
												<Link
													to={`/admin/editnews/${news.id}`}
													className="btnEdit fa fa-pencil bg-3 text-fff"
												/>
												<button
													className="btnRemove fa fa-trash bg-2 text-fff"
													onClick={() => handleDelete(news.id)}
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
