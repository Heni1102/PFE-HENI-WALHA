import { useState, useEffect } from "react";
import axios from "axios";
import "./style-admin.css";
import SideBar from "./SideBar";

export default function BoiteContact() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/contacts/")
			.then((response) => {
				setContacts(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the contacts!", error);
			});
	}, []);

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
							<h2 className="col-6 text-1 fl">Contact List Recu</h2>
							<div className="col-2"></div>
						</div>

						{/* Display list of contacts */}
						<div className="table-responsive">
							<table className="table table-bordered table-striped">
								<thead className="bg-1 text-fff">
									<tr>
										<th className="text-center">Name</th>
										<th className="text-center">Email</th>
										<th className="text-center">Phone</th>
										<th className="text-center">Message</th>
									</tr>
								</thead>
								<tbody>
									{contacts.map((contact) => (
										<tr key={contact.id}>
											<td className="text-center">{contact.name}</td>
											<td className="text-center">{contact.email}</td>
											<td className="text-center">{contact.phone}</td>
											<td>{contact.message}</td>
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
