import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from "./services/userService";
import { useEffect } from "react";
import Inspect from "./components/screens/Inspect";
import Duel from "./components/screens/Duel";
import Home from "./components/screens/Home";

function App() {
	// Hook that runs after React has updated the DOM
	useEffect(() => {
		inspectUser();
	}, []);

	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Route path="/inspect" component={Inspect} />
			<Route path="/duel" component={Duel} />
			<Route exact path="/" component={Home} />
		</Router>
	);
}

export default App;
