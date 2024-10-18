/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Form.css";

const Form = () => {
	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "5ab43bb0-952a-4a9b-b93c-8bb1f474512c");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			});

			const data = await res.json();

			if (data.success) {
				console.log("Success", data);
			} else {
				console.log("Error", data);
			}
		} catch (error) {
			console.error("Fetch error: ", error);
		}
	};

	return (
		<div className="contact-form-container">
			<h2>Contact Us</h2>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<input type="text" name="name" id="name" placeholder="Enter your name" required />
				</div>
				<div className="form-group">
					<input type="email" name="email" id="email" placeholder="Enter your email" required />
				</div>
				<div className="form-group">
					<textarea name="message" id="message" placeholder="Enter your message" required></textarea>
				</div>
				<button type="submit">Submit Form</button>
			</form>
		</div>
	);
};

export default Form;
