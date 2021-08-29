import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { userRegister } from "../api/actions";
import Nav from "./Nav";
import '../styles/registration.css';
import logo from '../Assets/Potluck.png';

const Registration = (props) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });
  const { push } = useHistory();

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.userRegister(user);
  };

  // used for useEffect dependency array, more stability
  const registerCallback = useCallback(() => {
    formSubmit();
  });

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      push("/potluck");
    }
  }, [registerCallback]);

  return (
    <>
      <Nav />
      <div class='registrationcontainer'>
      <img src={logo} alt='logo'/>
      <form onSubmit={formSubmit}>
        <h2>Create An Account</h2><br/>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={onInputChange}
          maxLength="30"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={onInputChange}
          maxLength="30"
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={onInputChange}
          maxLength="30"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={onInputChange}
          maxLength="30"
        /><br/><br/>
        <button>Sign Up</button>
      </form> 
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error,
    success: state.success,
  };
};

const mapDispatchToProps = { userRegister };

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
