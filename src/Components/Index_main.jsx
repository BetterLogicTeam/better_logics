import React from "react";
import Header from "./Header/Header";
import First from "./First/First";
import Crypto from "./Crypto/Crypto";
import Solution from "./Solution/Solution";
import Roadmap from "./Roadmap/Roadmap";
import Slider from "./Slider/Slider";
import Coin from "./Coin/Coin";
import Token from "./Token/Token";
import Ourteam from "./Ourteam/Ourteam";
import BoardMember from "./BoardMember/BoardMember";
import Advisor from "./Advisor/Advisor";
import Faq from "./Faq/Faq";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Index_main() {
  return (
    <div>
      <First />
      <Crypto />
      <Solution />
      {/* <Roadmap /> */}
      {/* <Slider /> */}
      <Coin />
      <Token />
      <Ourteam />
      {/* <BoardMember /> */}
      {/* <Advisor /> */}
      <Faq />
      <Contact />
    </div>
  );
}
