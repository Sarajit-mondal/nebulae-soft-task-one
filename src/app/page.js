"use client";
import About from "./components/pages/home/About";
import Awards from "./components/pages/home/Awards";
import Development from "./components/pages/home/development/Development";
import NavBar from "./components/pages/home/NavBar";
import OurDesign from "./components/pages/home/ourDesign/OurDesign";
import OurWorks from "./components/pages/home/OurWorks";
import Service from "./components/pages/home/Service";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TotalAwardsAndProject from "./components/pages/home/totalAwardsAndProject/TotalAwardsAndProject";
import FaqSection from "./components/pages/home/FaqSection";
import Blog from "./components/pages/home/BlogSection/Blog";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <div>
      <NavBar />
      <About />
      <Service />
      <Awards />
      <OurWorks />
      <OurDesign />
      <Development />
      <TotalAwardsAndProject />
      <FaqSection />
      <Blog />
    </div>
  );
}
