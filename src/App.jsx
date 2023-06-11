import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Contact from "./views/Contact";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/favoritos" element={<Favorites />} />
				<Route path="/contacto" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
