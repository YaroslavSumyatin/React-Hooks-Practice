import { createContext, useContext } from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

const HelloContext = createContext();

const App = () => {
	return (
		<HelloContext.Provider value="Hello World!!!">
			<Child />
		</HelloContext.Provider>
	);
};

const Child = () => {
	const value = useContext(HelloContext);
	return <div>{value}</div>;
};

root.render(<App />);
