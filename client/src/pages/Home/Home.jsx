import React from "react";
import Navbar from "../../components/Home/Navbar";
import Hero from "../../components/Home/Hero";
import Solutions from "../../components/Home/Solutions";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
