import React from "react";
import Header from "../components/header.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
