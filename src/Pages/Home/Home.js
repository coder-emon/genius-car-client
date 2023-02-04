import React from "react";
import About from "../../Components/About/About";
import Baner from "../../Components/Baner/Baner";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Baner></Baner>
      <About></About>
      <Services></Services>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
