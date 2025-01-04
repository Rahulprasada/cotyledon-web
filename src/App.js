import { First } from "react-bootstrap/esm/PageItem";
import "./App.css";
import Home from "./Components/Home";
import Industry from "./Components/Landingscreens/Industrypart/Industry";
import Navbar from "./Components/NavBar";
import Firstpg from "./Components/Firstpg";
import Part4 from "./Components/Part4";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Industry />
      <Firstpg />
      <Part4 />
    </>
  );
}

export default App;
