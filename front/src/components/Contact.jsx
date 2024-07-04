import { useState } from "react";
import axios from "axios";
import EndSection from "./EndSection";
import Header from "./Header";
import "../App.css";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const contactData = {
			name: name,
			email: email,
			phone: phone,
			message: message,
		};

		axios
			.post("http://localhost:3001/contacts/", contactData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log(response.data);
				alert("Message sent successfully!");
			})
			.catch((error) => {
				console.error("There was an error sending the message!", error);
				alert("There was an error sending the message!");
			});
	};

	return (
		<>
			<div className="hero_area">
				<Header />
			</div>
			{/* Contact Section */}
			<section className="py-5 contact_section ">
				<div className="container-fluid py-5 mx-5">
					<div className="row">
						<div className="col-md-6 ">
							<div className="heading_container ">
								<h2>Contact Us</h2>
							</div>
						</div>
					</div>
					<div className="">
						{/* Formulaire d'ajout de contact */}
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-6">
									<div className="contact_form-container">
										<div>
											<div>
												<input
													type="text"
													placeholder="Name"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div>
												<input
													type="email"
													placeholder="Email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div>
												<input
													type="text"
													placeholder="Phone Number"
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
												/>
											</div>
											<div>
												<input
													type="text"
													className="message-box"
													placeholder="Message"
													value={message}
													onChange={(e) => setMessage(e.target.value)}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="mx-2 row d-flex">
									<button type="submit">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<EndSection />
			{/* end Contact Section */}
		</>
	);
}
