import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

const Potluck = () => {
  const defaultState = {
    name: "",
    date: "",
    time: "",
    location: "",
    guests: "",
    items: false,
  };

  const [host, setHost] = useState([]);
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formState.name) {
      setButtonDisabled(!formState.name);
    }
  }, [formState]);

  const formSubmit = (evt) => {
    evt.preventDefault();
    console.log("Form Submitted");
    /* this will need to be updated to the actual api*/
    axios
      .post("http://localhost:5000/api/", formState)
      .then((res) => {
        setHost(res.data);
        console.log(res.data);
        console.log("Submit Success", res);
      })
      .catch((err) => console.log(err));
  };

  const inputChange = (evt) => {
    setFormState({ ...formState, [evt.target.name]:evt.target.value });
  };

  return (
    <div className="Potluck">
      <Nav />
      <h2>My Potluck</h2>
      <h4>--share your info and potluck preferences below--</h4>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
        />

        <label htmlFor="date"> Date </label>
        <input
          type="date"
          min="2021-01-01"
          max="2025-12-31"
          name="date"
          onChange={inputChange}
          value={formState.date}
        />
        <br></br>
        <label htmlFor="time"> Time </label>
        <input
          type="time"
          name="time"
          onChange={inputChange}
          value={formState.time}
        />

        <label htmlFor="location"> Location </label>
        <input
          type="text"
          name="location"
          onChange={inputChange}
          value={formState.location}
        />
        <div>
        <br></br>
            <label htmlFor="guests">Invite Guests via Email</label>
            <br></br>
            <input 
            id="emailAddress"
            type="email" multiple
            input size="40"
            placeholder="(addresses seperated by commas)"
            name="guests"
            onChange={inputChange}
            value={formState.guests}
            />
        </div>
        <br></br>
        <label htmlFor="items">Potluck Items needed</label>
        <div className="Potluck-items">
          <input
            className="items"
            name="items"
            type="text" multiple
            input size="25"
            placeholder="(e.g. entree)"
            onChange={inputChange}
            value={formState.items}
          />
          <input
            className="items"
            name="items"
            type="text" multiple
            input size="25"
            placeholder="(e.g. appetizers)"
            onChange={inputChange}
            value={formState.items}
          />
        <input
            className="items"
            name="items"
            type="text" multiple
            input size="25"
            placeholder="(e.g. sides)"
            onChange={inputChange}
            value={formState.items}
          />
          <br/>
          <input
            className="items"
            name="items"
            type="text" multiple
            input size="25"
            placeholder="(e.g. drinks)"
            onChange={inputChange}
            value={formState.items}
          />
          <input
            className="items"
            name="items"
            type="text" multiple
            input size="25"
            placeholder="(e.g. desserts)"
            onChange={inputChange}
            value={formState.items}
          />
          <input
            className="items"
            name="items"
            type="text" multiple
            input size="25"
            placeholder="(etc.)"
            onChange={inputChange}
            value={formState.items}
          />
        </div>

        <br></br>

        <button id="submit" disabled={buttonDisabled}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default Potluck;
