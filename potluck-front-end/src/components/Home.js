import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="home-title">
          <h1>POTLUCK PLANNER</h1>
        </div>

        <div className="home-container">
          <div className="left">
            <a href="/register">Create an account</a>
          </div>
          <div className="right">
            <a href="/login">Login to your account</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
