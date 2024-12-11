import { Link } from "react-router-dom";
import "../App.css";
import EndSection from "./EndSection";
import Header from "./Header";
export default function Template() {
	return (
		<>
			<div className="hero_area">
				{/* header section starts */}
				<Header />
				{/* end header section */}
				{/* slider section */}
				<section className="slider_section ">
					<div className="container ">
						<div className="row">
							<div className="col-md-6 ">
								<div className="detail-box">
									<h1>
										Our <br />
										Company
										<br />
									</h1>
									<p>
										Welcome to SKS Energy, the leader in the sale and
										installation of photovoltaic systems in Sfax. We are
										committed to providing innovative and sustainable solar
										energy solutions for individuals, businesses and public
										institutions. Our mission is to contribute to a greener,
										more sustainable future by facilitating access to clean,
										renewable energy.
									</p>

									<Link to="/contact">Contact Us</Link>
								</div>
							</div>
							<div className="col-md-6">
								<div className="img-box">
									<img src="images/SKS_Logo.png" alt="SKS Logo" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* end slider section */}
			</div>
			{/* about us section */}
			<section className="about-us">
				<div className="responsive-container-block bigContainer">
					<div className="responsive-container-block Container">
						<div className="imgContainer">
							<img
								className="blueDots"
								src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
								alt="Decoration"
							/>
							<img
								className="mainImg"
								src="images/SKS_Logo.png"
								alt="SKS Logo"
							/>
						</div>
						<div className="responsive-container-block textSide">
							<p className="text-blk heading">Why SKS Energy?</p>
							<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
								<div className="cardImgContainer">
									<img
										className="cardImg"
										src="images/L1.png"
										alt="High-quality products"
									/>
								</div>
								<div className="cardText">
									<p className="text-blk cardHeading">High-quality products</p>
									<p className="text-blk cardSubHeading">
										We work with well-known brands to offer high-quality,
										long-lasting products.
									</p>
								</div>
							</div>
							<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
								<div className="cardImgContainer">
									<img
										className="cardImg"
										src="images/L4.png"
										alt="Expert staff"
									/>
								</div>
								<div className="cardText">
									<p className="text-blk cardHeading">Expert staff</p>
									<p className="text-blk cardSubHeading">
										Our engineers and technicians are trained and certified to
										guarantee safe and efficient installation.
									</p>
								</div>
							</div>
							<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
								<div className="cardImgContainer">
									<img
										className="cardImg"
										src="images/L2.png"
										alt="Stability & expertise"
									/>
								</div>
								<div className="cardText">
									<p className="text-blk cardHeading">Stability & expertise</p>
									<p className="text-blk cardSubHeading">
										With over 7 years experience in the field, we have mastered
										every facet of photovoltaic systems.
									</p>
								</div>
							</div>
							<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
								<div className="cardImgContainer">
									<img
										className="cardImg"
										src="images/L3.png"
										alt="Customized solutions"
									/>
								</div>
								<div className="cardText">
									<p className="text-blk cardHeading">Customized solutions</p>
									<p className="text-blk cardSubHeading">
										Based in Tunisia, we understand the specific needs of our
										market and offer personalized local support.
									</p>
								</div>
							</div>
							<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
								<div className="cardImgContainer">
									<img
										className="cardImg"
										src="images/L5.png"
										alt="After sales services"
									/>
								</div>
								<div className="cardText">
									<p className="text-blk cardHeading">After sales services</p>
									<p className="text-blk cardSubHeading">
										Your satisfaction is our objective, which is why we offer a
										comprehensive after-sale service to guarantee your complete
										pleasure.
									</p>
								</div>
							</div>
						</div>
						<img
							className="redDots"
							src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
							alt="Decoration"
						/>
					</div>
				</div>
			</section>
			{/* end about us section */}

			{/* product section */}
			<section className="about_section layout_padding-bottom">
				<div className="responsive-container">
					<div className="grid">
						<div className="grid-column">
							<a className="product" href="ProduitPX.html">
								<div className="product-image">
									<img src="images/p1.jpg" alt="JA Solar" />
								</div>
								<div className="product-content">
									<div className="product-info">
										<h2 className="product-title">JA Solar</h2>
									</div>
								</div>
							</a>
						</div>
						<div className="grid-column">
							<a className="product" href="ProduitM.html">
								<div className="product-image">
									<img src="images/p5.jpg" alt="Goodwe" />
								</div>
								<div className="product-content">
									<div className="product-info">
										<h2 className="product-title">Goodwe</h2>
									</div>
								</div>
							</a>
						</div>
						<div className="grid-column">
							<a className="product" href="Produit.html">
								<div className="product-image">
									<img src="images/p3.jpg" alt="Ingeteam" />
								</div>
								<div className="product-content">
									<div className="product-info">
										<h2 className="product-title">Ingeteam</h2>
									</div>
								</div>
							</a>
						</div>
						<div className="grid-column">
							<a className="product" href="ProduitB.html">
								<div className="product-image">
									<img src="images/p4.jpg" alt="Victron Energy" />
								</div>
								<div className="product-content">
									<div className="product-info">
										<h2 className="product-title">Victron Energy</h2>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* end product section */}

			<div>
				{/* service section */}
				<section className="service_section layout_padding">
					<div className="container ">
						<div className="heading_container heading_center">
							<h2> Our Services </h2>
						</div>
						<div className="row">
							<div className="col-sm-6 col-md-4 mx-auto">
								<a className="box" href="Download Application.html">
									<div className="img-box">
										<img src="images/smartphone.png" alt />
									</div>
									<div className="detail-box">
										<h5>Download Application</h5>
										<p>Try our mobile App</p>
									</div>
								</a>
							</div>
							<div className="col-sm-6 col-md-4 mx-auto">
								<a className="box" href="payment.html">
									<div className="img-box">
										<img src="images/credit-card.png" alt />
									</div>
									<div className="detail-box">
										<h5>News</h5>
										<p>Check our News</p>
									</div>
								</a>
							</div>
							<div className="col-sm-6 col-md-4 mx-auto">
								<a className="box" href="shop.html">
									<div className="img-box">
										<img src="images/shopping-cart.png" alt />
									</div>
									<div className="detail-box">
										<h5>Shop</h5>
										<p>Check Our Products</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* end service section */}
				<EndSection />
			</div>
		</>
	);
}
