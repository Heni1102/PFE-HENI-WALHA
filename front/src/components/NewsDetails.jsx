import EndSection from "./EndSection";
import Header from "./Header";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import news1 from "../../public/images/News1.jpg";
import { Card, Col, Row } from "react-bootstrap";
export default function NewsDetails() {
	const { id } = useParams();
	const [news, setNews] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/news/${id}`)
			.then((response) => {
				setNews(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the news!", error);
			});
	}, [id]);

	if (!news) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="hero_area">
				<Header />
			</div>
			<div>
				{/*Section*/}
				<section id="pricing" className="pricing-section">
					<div className="container">
						{/* <div className="row">
							<div className="col-md-4  ">
								<div className="highlight-window" id="product-img">
									<div className="highlight-overlay" id="highlight-overlay">
										<img src={news1} alt="dd" />
									</div>
								</div>
							</div>
							<div className="col-md-2  "></div>
							<div className="col-md-6  " data-wow-delay=".4s">
								<div className="product-item">
									<div className="main-content">
									
										<h2>Title: {news.title}</h2>

										<h2>Description :</h2>
										<p> {news.description}</p>

										<div className="highlight-window  mobile" id="product-img">
											<div
												className="highlight-overlay"
												id="highlight-overlay-mobile"
											/>
										</div>
									</div>
								</div>
							</div>
						</div> */}

						<Card className=" mb-5 ">
							<Row>
								<Col>
									<Card.Img variant="top" src={news1} height={250} />
								</Col>
								<Col>
									<Card.Body>
										<Card.Title>
											{" "}
											<h1>{news.title}</h1>
										</Card.Title>

										<Card.Text>
											<b>Description :</b>
											<br /> <p className="mx-5"> {news.description}</p>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</div>
				</section>
				{/*End Section*/}
			</div>

			<EndSection />
		</>
	);
}
