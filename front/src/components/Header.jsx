import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/SKS_Logo.png";
export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<header className="header_section">
				<div className="header_bottom">
					<div className="container-fluid">
						<nav className="navbar navbar-expand-lg custom_nav-container">
							<Link className=" d-flex navbar-brand  row" to="/">
								<span>
									<img
										src={logo}
										className="col"
										style={{ height: "100px", width: "100px", float: "left" }}
										alt="SKS Logo"
									/>
								</span>
								<p
									style={{ color: "rgb(122, 175, 255)", marginTop: "35px" }}
									className="col"
								>
									Your energy is our passion,
								</p>
							</Link>

							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className=""> </span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav ">
									<li className="nav-item active">
										<Link to="/" className="nav-link">
											Home <span className="sr-only">(current)</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/application" className="nav-link">
											Download Application
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/shop" className="nav-link">
											Shop
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/news" className="nav-link">
											News
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/contact" className="nav-link">
											Contact Us
										</Link>
									</li>
									{/* login section */}
									<li className="nav-item">
										<button
											className="btn btn-primary"
											id="openModalBtn"
											onClick={openModal}
										>
											Login
										</button>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>

			{isModalOpen && (
				<div id="loginModal" className="modal">
					<div className="login-box">
						<span className="close" onClick={closeModal}>
							&times;
						</span>
						<h2>Login</h2>
						<form>
							<div className="user-box">
								<input type="text" name="" required />
								<label>Username</label>
							</div>
							<div className="user-box">
								<input type="password" name="" required />
								<label>Password</label>
							</div>
							<a href="admin page.html">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Submit
							</a>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
