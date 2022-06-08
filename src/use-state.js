import { useState } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
const App = () => {
	return (
		<div>
			<StateSwitcher />
		</div>
	);
};

const StateSwitcher = () => {
	const [color, setColor] = useState("white");
	const [font, setFont] = useState({
		size: 14,
		color: "black",
	});
	return (
		<div
			style={{
				padding: "10px",
				backgroundColor: color,
				fontSize: font.size,
				color: font.color,
			}}>
			HELLO
			<button onClick={() => setColor("gray")}>Dark</button>
			<button onClick={() => setColor("white")}>Light</button>
			<button onClick={() => setFont({ size: 14, color: "black" })}>Default Font</button>
			<button
				onClick={() =>
					setFont((font) => {
						return { ...font, color: "red" };
					})
				}>
				Color Red
			</button>
			<button
				onClick={() =>
					setFont((font) => {
						return { ...font, size: 25 };
					})
				}>
				Size 25
			</button>
		</div>
	);
};

root.render(<App />);
