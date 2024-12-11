import EndSection from "./EndSection";
import Header from "./Header";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function News() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/news/")
			.then((response) => {
				setNews(response.data);
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
			{/* Section */}
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
									<h2>Check our News.</h2>
									<p>
										Check our Lastest News and contact us once you find
										something you like !
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* end payment section */}
				{/*Shop Section*/}
				<main>
					<div className="responsive-container">
						{/* //list des news  */}
						<div className="grid">
							{/*	<div className="grid-column">
								<a className="product" href="News1.html">
									<div className="product-image">
										<img src="images/News1.jpg" />
									</div>
									<div className="product-content">
										<div className="product-info">
											<h2 className="product-title">
												Solar Energy Production increase and New implentation in
												Sfax
											</h2>
										</div>
									</div>
								</a>
								<a className="product" href="News1.html">
									<div className="product-image">
										<img src="images/News1.jpg" />
									</div>
									<div className="product-content">
										<div className="product-info">
											<h2 className="product-title">
												Solar Energy Production increase and New implentation in
												Sfax
											</h2>
										</div>
									</div>
								</a>
							</div>
							<div className="grid-column">
								<a className="product" href="News1.html">
									<div className="product-image">
										<img src="images/News1.jpg" />
									</div>
									<div className="product-content">
										<div className="product-info">
											<h2 className="product-title">
												Solar Energy Production increase and New implentation in
												Sfax
											</h2>
										</div>
									</div>
								</a>
							</div>
							<div className="grid-column">
								<a className="product" href="News1.html">
									<div className="product-image">
										<img src="images/News1.jpg" />
									</div>
									<div className="product-content">
										<div className="product-info">
											<h2 className="product-title">
												Solar Energy Production increase and New implentation in
												Sfax
											</h2>
										</div>
									</div>
								</a>
							</div> */}
							{news.map((item) => (
								<div key={item.id} className="grid-column">
									<a className="product" href={`news/${item.id}`}>
										<div className="product-image">
											{/* <img src={item.PhotoUrl} alt={item.title} /> */}
											<img src="images/News1.jpg" alt={item.title} />
										</div>
										<div className="product-content">
											<div className="product-info">
												<h2 className="product-title">{item.title}</h2>
												<p>{item.description}</p>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
					{/*end shop section*/}
				</main>
			</div>

			{/* end  Section */}
			<EndSection />
		</>
	);
}
