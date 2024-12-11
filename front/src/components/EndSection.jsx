import logo1 from "../../public/images/logo1.jpg";
import logo2 from "../../public/images/logo2.jpg";
import logo3 from "../../public/images/logo3.png";
import logo4 from "../../public/images/logo4.png";
import logo5 from "../../public/images/logo5.jpg";
import logo6 from "../../public/images/logo6.png";
import logo7 from "../../public/images/L7.png";

export default function EndSection() {
	return (
		<>
			{/*partner section*/}
			<section className="professional_section">
				<div className="slider">
					<img src={logo1} />
					<img src={logo2} />
					<img src={logo4} />
				</div>
			</section>
			{/*end partner section*/}
			{/*partner section2*/}
			<section className="professional2_section">
				<div className="slider">
					<img src={logo3} />
					<img src={logo5} />
					<img src={logo6} />
					<img src={logo7} />
				</div>
			</section>
			{/*end partner section2*/}
			{/* info section */}
			<section className="info_section ">
				<div className="container">
					<h4>Get In Touch</h4>
					<div className="row">
						<div className="col-lg-10 mx-auto">
							<div className="info_items">
								<div className="row">
									<div className="col-md-4">
										<a href="https://www.google.com/maps/place/Av.+de+la+libert%C3%A9,+Sfax/@34.7388482,10.7542515,17z/data=!3m1!4b1!4m6!3m5!1s0x1301d32a56da5917:0xa1dbcc81682cd37a!8m2!3d34.7388482!4d10.7542515!16s%2Fg%2F11b62l8_bt?entry=ttu">
											<div className="item ">
												<div className="img-box ">
													<i className="fa fa-map-marker" aria-hidden="true" />
												</div>
												<p>Our Location</p>
											</div>
										</a>
									</div>
									<div className="col-md-4">
										<a href>
											<div className="item ">
												<div className="img-box ">
													<i className="fa fa-phone" aria-hidden="true" />
												</div>
												<p>27 720 220 / 27 720 120</p>
											</div>
										</a>
									</div>
									<div className="col-md-4">
										<a href="contact.html">
											<div className="item ">
												<div className="img-box">
													<i className="fa fa-envelope" aria-hidden="true" />
												</div>
												<p>contact@sksenergy.com</p>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="social-box">
					<h4>Follow Us</h4>
					<div className="box">
						<a href="https://www.facebook.com/profile.php?id=61556900123174">
							<i className="fa fa-facebook" aria-hidden="true" />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
