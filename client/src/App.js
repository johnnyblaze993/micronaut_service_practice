import "./App.css";
import React, { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [greeting, setGreeting] = useState("");

	async function sayHello() {
		const response = await fetch(`http://localhost:8080/hello/${name}`, {
			headers: {
				"User-Agent": "navigtor.userAgent",
				"content-type": "application/json",
			},
		});
		const data = await response.text();
		setGreeting(data);
	}

	return (
		<div className="App">
			<h1>Micronaut service headers test</h1>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your name or else!"
				style={{
					width: "300px",
				}}
			/>
			<button onClick={sayHello}>Submit Name</button>
			<p>{greeting}</p>
		</div>
	);
}

export default App;
