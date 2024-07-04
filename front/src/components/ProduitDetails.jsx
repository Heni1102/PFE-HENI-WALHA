import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "./Header";
import EndSection from "./EndSection";
import axios from "axios";
import src from "../../public/images/fb.jpg";

function ProduitDetails() {
	const { id } = useParams();
	const [produit, setProduit] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/produits/${id}`)
			.then((response) => {
				setProduit(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the produit!", error);
			});
	}, [id]);
	if (!produit) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="hero_area">
				<Header />
				<div className="container mt-5">
					<div className=" mb-5 py-5  mt-5">
						<Row>
							<Col>
								<Card.Img variant="top" src={src} height={250} />
								{/* <Card.Img variant="top" src={produit.PhotoUrl1} height={250} /> */}
							</Col>
							<Col>
								<Card.Body>
									<Card.Title>
										<h1>{produit.label}</h1>
									</Card.Title>

									<Card.Text>
										<b>About The Product :</b>
										<br /> <p className="mx-5"> {produit.description}</p>
									</Card.Text>
									<Card.Text>
										<strong>Price :</strong> {produit.price}
									</Card.Text>
									<Card.Text>
										<strong>Code :</strong> {produit.code}
									</Card.Text>
								</Card.Body>
							</Col>
						</Row>
					</div>{" "}
				</div>
				{/*End Section*/} <EndSection />
			</div>
		</>
	);
}

export default ProduitDetails;
