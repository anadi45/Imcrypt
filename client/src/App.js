import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Encode from "./components/encode/Encode";
import Decode from "./components/decode/Decode";
import Footer from "./components/footer/Footer";

function App() {
  return (
	<>
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Homepage/>}/>
				<Route path="/encode" element={<Encode/>}/>
				<Route path="/decode" element={<Decode/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	</>
  );
}

export default App;
