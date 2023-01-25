import React from "react";
import "lazysizes";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js";

import axios from "axios";

import {Route, Routes} from "react-router-dom";
import AppOutlet from "./components/AppOutlet";
import {Home} from "./pages";

const App: React.FC = () => {

	React.useEffect(() => {
		;(async () => {
			await axios.get('/token/add')
		})();
	}, [])

	return (
		<Routes>
			<Route path="/" element={<AppOutlet/>}>
				<Route path="/" element={<Home/>}/>
			</Route>
		</Routes>
	);
};

export default App;
