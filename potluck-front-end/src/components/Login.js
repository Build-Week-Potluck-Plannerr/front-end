import React, { useState, useEffect, useCallback } from "react";
import { userLogin } from "../api/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";

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
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Username</label>
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
        />
        <input type="submit" />
      </form>
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