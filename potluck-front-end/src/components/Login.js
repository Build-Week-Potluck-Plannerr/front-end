import React, { useState, useEffect, useCallback } from "react";
import { userLogin } from "../api/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import '../styles/login.css';
import logo from '../Assets/Potluck.png';

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const { push } = useHistory();

  const handleLoginChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.userLogin(user);
  };

  // used for useEffect dependency array, more stability
  const loginCallback = useCallback(() => {
    handleLoginSubmit();
  });

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      push("/potluck");
    }
  }, [loginCallback]);

  return (
    <>
      <Nav />
      <div className="center">
        <div className='logincontainer'>
          <h2>Login to your Account</h2><br /><br />
          <img className="logo1" src={logo} /><br />
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              value={user.username}
              name="username"
              onChange={handleLoginChange}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={user.password}
              name="password"
              type="password"
              onChange={handleLoginChange}
            /><br /><br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error,
    success: state.success,
  };
};

const mapDispatchToProps = { userLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);