import React from "react";
import { Link, useHistory } from "react-router-dom";
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
            <Link to="/register">Create an account</Link>
          </div>
          <div className="right">
            <Link to="/login">Login to your account</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
