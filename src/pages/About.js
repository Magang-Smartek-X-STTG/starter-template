import React from "react";

import Footer from "../parts/Footer";
import Header from "../parts/Header";

const About = () => {
  return (
    <section className="h-screen overflow-y-auto">
      <Header></Header>
      <main className="container mx-auto flex flex-col justify-between h-screen">
        <div className="text-center">
          <h1 className="text-6xl text-white mt-10">About Page</h1>
        </div>
      </main>
      <Footer></Footer>
    </section>
  );
};

export default About;
