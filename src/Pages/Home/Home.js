import React from "react";
import About from "../../Components/About/About";
import Baner from "../../Components/Baner/Baner";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Products from "../../Components/Products/Products";
import Services from "../../Components/Services/Services";
import Team from "../../Components/Team/Team";

const Home = () => {
  return (
    <div>
      <Baner></Baner>
      <About></About>
      <Services></Services>
      <ContactInfo></ContactInfo>
      <Products></Products>
      <Team></Team>
    </div>
  );
};

export default Home;
