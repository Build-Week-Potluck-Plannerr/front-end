import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div class="home-title">
          <h1>POTLUCK PLANNER</h1>
        </div>

        <div class="home-container">
          <div class="left">
            <a href="/register">Create an account</a>
          </div>
          <div class="right">
            <a href="/login">Login to your account</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
