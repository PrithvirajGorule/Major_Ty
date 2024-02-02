import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const HomePage = () => {
  const getStarted = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />

      <main className="main" id="main">
        <section className="section hero">
          {/* Hero section content */}
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Add your styles here if needed */
      `}</style>
    </>
  );
};

export default HomePage;
