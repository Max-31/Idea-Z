/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
	return (
		<div className="landing-container">
			<header className="hero">
				<h1>Nath Builders</h1>
				<p>Your trusted partner in construction and design.</p>
				<a href="#contact" className="cta-button">
					Get a Quote
				</a>
			</header>

			<section className="services">
				<h2>Our Services</h2>
				<div className="services-cards">
					<div className="service-card">
						<h3>Residential Construction</h3>
						<p>
							High-quality construction services for your dream
							home.
						</p>
					</div>
					<div className="service-card">
						<h3>Commercial Projects</h3>
						<p>
							Expertise in commercial building projects tailored
							to your needs.
						</p>
					</div>
					<div className="service-card">
						<h3>Renovations</h3>
						<p>
							Transform your space with our renovation and
							remodeling services.
						</p>
					</div>
				</div>
			</section>

			<section id="contact" className="cta">
				<h2>Ready to Build Your Dream?</h2>
				<p>Contact us today to get started!</p>
				<a href="mailto:info@nathbuilders.com" className="cta-button">
					Contact Us
				</a>
			</section>

			<footer className="footer">
				<p>&copy; 2024 Nath Builders. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
