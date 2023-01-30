import Navbar from "./component/navbar.js";
import Home from "./home.js";
import About from "./About.js";
import Services from "./services.js";
import Footer from "./footer.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          padding: "5% 0",
          fontFamily: "Rubik,sans-serif",
          color: " #fff",
          overflowX: " hidden",
        }}
        className="header"
      >
        <div
          className="headerContainer"
          style={{ width: " 90%", marginLeft: "auto", marginRight: " auto" }}
        >
          <Navbar />
          <Home />
          <About />
          <Services />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
