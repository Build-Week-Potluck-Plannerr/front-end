import React, { useState } from "react";

const initialValues = {
  username: "",
  name: "",
  password: "",
};

const Registration = () => {
  const [user, setUser] = useState(initialValues);

  return (
    <form>
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
    </form>
  );
};

export default Registration;
