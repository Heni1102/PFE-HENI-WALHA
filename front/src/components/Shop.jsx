import EndSection from "./EndSection";
import Header from "./Header";
import "../App.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Shop() {
	const [data, setData] = useState([]);

	const src = "images/fb.jpg";
	useEffect(() => {
		axios
			.get("http://localhost:3001/produits/")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the news!", error);
			});
	}, []);

	return (
		<>
			<div className="hero_area">
				<Header />
			</div>
			<div>
				{/* Payment section */}
				<section className="professional_section layout_padding">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-box">
									<img src="images/professional-img.png" alt />
								</div>
							</div>
							<div className="col-md-6 ">
								<div className="detail-box">
									<h2>
										Check our <br />
										Products.
									</h2>
									<p>
										Check our produicts and contact us once you find something
										you like !
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* end payment section */}
				{/*Shop Section*/}
				<main>
					{/* <div className="responsive-container">
						<div className="grid" id="produits"></div>
					</div> */}

					<Container className="mt-5 py-5 m-5">
						<Row>
							{data.map((produit, index) => {
								return (
									<Col key={index} md={4} className="mt-2">
										<Card>
											<Link to={`${produit.id}`}>
												<Card.Img
													variant="top"
													// src={produit.PhotoUrl1}
													src={src}
													width={250}
												/>
												<Card.Body>
													<Card.Title>
														{" "}
														<h2>{produit.label}</h2>
													</Card.Title>

													<Card.Text>
														<strong>Price :</strong> {produit.price}
													</Card.Text>
													<Card.Text>
														<strong>Code :</strong> {produit.code}
													</Card.Text>
												</Card.Body>{" "}
											</Link>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Container>
				</main>{" "}
				{/*end shop section*/}
			</div>{" "}
			<EndSection />
		</>
	);
}
