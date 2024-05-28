import React from "react";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Contact from "./Contact";
import Footer from "../../Footer";

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
