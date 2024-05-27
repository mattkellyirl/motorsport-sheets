import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Solution from "../Solution";
import Solution2 from "../Solution2";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solution />
      {/* <Solution2 /> */}
      <Footer />
    </div>
  );
}

export default Home;
