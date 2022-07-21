import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import First from "./Components/First/First";
import Crypto from "./Components/Crypto/Crypto";
import Solution from "./Components/Solution/Solution";
import Roadmap from "./Components/Roadmap/Roadmap";
import Slider from "./Components/Slider/Slider";
import Coin from "./Components/Coin/Coin";
import Token from "./Components/Token/Token";
import Ourteam from "./Components/Ourteam/Ourteam";
import BoardMember from "./Components/BoardMember/BoardMember";
import Advisor from "./Components/Advisor/Advisor";
import Faq from "./Components/Faq/Faq";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Ourteam_main from "./Components/Ourteam_main"
import Index_main from "./Components/Index_main";
import Crypto_main from "./Components/Crypto_main";
import Contact_main from "./Components/Contact_main";
import Portfolio_main from "./Components/Portfolio/Portfolio_main";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Index_main />} />

          <Route exact path="/Ourteam_main" element={<Ourteam_main />} />
          <Route exact path="/Crypto_main" element={<Crypto_main />} />
          <Route exact path="/Contact_main" element={<Contact_main />} />
          <Route exact path="/Portfolio_main" element={<Portfolio_main />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
