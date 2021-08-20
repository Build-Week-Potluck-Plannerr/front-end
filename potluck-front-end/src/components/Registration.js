import React, { useState } from "react";
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
  };

  return (
    <form onSubmit={formSubmit}>
      <h2>Create An Account</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={onInputChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={onInputChange}
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
