import React, { useState } from "react";
import axios from 'axios';
// import { connect } from "react-redux";
// import { userRegistration } from "../api/actions";

const Registration = (props) => {
  const [user, setUser] = useState({
    username: "",
    name: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // passes user state to actions.js
    // props.userRegistration(user);
    axios
      .post('https://reqres.in/api/users', user)
      .then((res) => {
        console.log(res)
      })
  };

  return (
    <form onSubmit={formSubmit}>
      <h2>Create An Account</h2>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        name="username"
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
      />
      <button>Sign Up</button>
    </form>
  );
};

// const mapStateToProps = (state) => {
//     return {
//       user: state.user,
//     };
//   };

// const mapDispatchToProps = { userRegistration };

// export default connect(mapStateToProps, mapDispathToProps)(Registration)

export default Registration;
