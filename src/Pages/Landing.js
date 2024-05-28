import React from "react";
import Nav from "../components/Nav";
import MainSection from "../components/MainSection";
import CardConatiner from "./CardConatiner";
import SingleCard from "./SingleCard";
import Testimonial from "./Testimonial";
import Community from "./Community";
import FooterLinks from "../components/FooterLinks";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="poppins-regular">
      <MainSection />
      <CardConatiner />
      <SingleCard />
      <Testimonial />
      <Community />
      <FooterLinks />
      <Footer />
    </div>
  );
}
