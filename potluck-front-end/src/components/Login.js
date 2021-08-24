import React, { useState, useEffect } from "react";
import { userLogin } from "../api/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

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

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      push("/potluck");
  }, [handleLoginSubmit]);

  return (
    <div>
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
          onChange={handleLoginChange}
        />
        <input type="submit" />
      </form>
    </div>
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
