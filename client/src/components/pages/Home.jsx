import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Solutions from "../Solutions";

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
      <Footer />
    </div>
  );
}

export default Home;
