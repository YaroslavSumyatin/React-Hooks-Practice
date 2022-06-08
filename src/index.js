import { Component, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
	const [value, setValue] = useState(0);
	const [visible, setVisibe] = useState(true);

	if (visible) {
		return (
			<div>
				<button onClick={() => setValue((v) => v + 1)}>+</button>
				<button onClick={() => setVisibe(false)}>hide</button>
				<ClassCounter value={value} />
				<HookCounter value={value} />
				<Notification />
			</div>
		);
	}
	return <button onClick={() => setVisibe(true)}>show</button>;
};

class ClassCounter extends Component {
	componentDidMount() {
		console.log("class: mount");
	}

	componentDidUpdate(prevProps) {
		console.log("class: update");
	}

	componentWillUnmount() {
		console.log("class: unmount");
	}

	render() {
		return <p>{this.props.value}</p>;
	}
}

const HookCounter = ({ value }) => {
	//componentDidMount()
	useEffect(() => console.log("hook: mount"), []);

	//componentDidUpdate()
	useEffect(() => console.log("hook: update"));

	//componentWillUnmount()
	useEffect(() => () => console.log("hook: unmount"), []);

	return <p>{value}</p>;
};

const Notification = () => {
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => setVisible(false), 1500);
		return () => clearTimeout(timeout);
	}, []);
	return <div>{visible && <p>Hello</p>}</div>;
};

root.render(<App />);
