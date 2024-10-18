/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

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
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" required />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" required></textarea>
				</div>
				<button type="submit">Submit Form</button>
			</form>
		</div>
	);
};

export default Form;
