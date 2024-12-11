import EndSection from "./EndSection";
import Header from "./Header";
import "./style.css";
export default function Application() {
	return (
		<>
			<div className="hero_area">
				<Header />
			</div>
			<div>
				{/* Video section */}
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
									<h2>Check our Video Below For info</h2>
									<video width={600} height={340} controls>
										<source src="movie.mp4" type="video/mp4" />
										<source src="movie.ogg" type="video/ogg" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* end Video section */}
				{/* slider section */}
				<section className="slider_section ">
					<div className="container ">
						<div className="row">
							<div className="col-md-6 ">
								<div className="detail-box">
									<h1>
										Download <br />
										Link
									</h1>
									<p>
										Click Bellow to download our application on your phone and
										create an account to acces our service anytime !
									</p>
									<a href="Download Link.html">Download Link</a>
								</div>
							</div>
							<div className="col-md-6">
								<div className="img-box">
									<img src="images/Phone 1.png" alt />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* end slider section */}
			</div>

			<EndSection />
		</>
	);
}
