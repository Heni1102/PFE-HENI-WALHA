import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./login.css";
import Header from "./Header";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("http://localhost:3001/auth/login", {
				email,
				password,
			})
			.then(() => {
				alert("Login successful");
				navigate("/admin/products");
			})
			.catch((error) => {
				console.error("Error logging in:", error);
				setError("Invalid email or password.");
			});
	};

	return (
		<>
			<div className="hero_area">
				<Header />
			</div>

			<div className="login-box">
				<h2>Login</h2>
				<form>
					<label>Email</label>
					<div className="user-box">
						<input
							type="email"
							name="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<label>Password</label>
					<div className="user-box">
						<input
							type="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>
					{error && <div className="alert alert-danger mt-3">{error}</div>}
					<a onClick={handleSubmit}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Submit
					</a>
				</form>
			</div>
		</>
	);
}
