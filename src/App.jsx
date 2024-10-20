/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
					<Route path="/contact-us" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
