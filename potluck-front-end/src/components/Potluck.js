import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Potluck = () => {
  const defaultState = {
    name: "",
    date: "",
    time: "",
    location: "",
    guests: [""],
    drinks: "",
    sides: "",
    entrees: "",
    dessert: "",
    supplies: ""
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
      .post("https://reqres.in/api", formState)
      .then((res) => {
        setHost(res.data);
        console.log(res.data);
        console.log("Submit Success", res);
      })
      .catch((err) => console.log(err));
  };

  const inputChange = (evt) => {
    //   const value =
    //   evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setFormState({ ...formState, [evt.target.name]: evt.target.value });
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
        <br/>
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
        <br/>
            <label htmlFor="guests">Invite Guests via Email</label>
            <br/>
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
        <br/>
        <p>Potluck Items needed:</p>
        <br/>
        <div className="items-container">
            <label htmlFor="drinks">Drinks</label>
            <input
                className="items"
                name="drinks"
                type="text"
                placeholder="soda..."
                onChange={inputChange}
                value={formState.drinks}
            />
            <label htmlFor="sides">Sides</label>
            <input
                className="items"
                name="sides"
                type="text"
                placeholder="chips..."
                onChange={inputChange}
                value={formState.sides}
            />
            <label htmlFor="entrees">Entrees</label>
            <input
                className="items"
                name="entrees"
                type="text"
                placeholder="veggie burgers..."
                onChange={inputChange}
                value={formState.entrees}
            />
            <label htmlFor="desserts">Desserts</label>
            <input
                className="items"
                name="desserts"
                type="text"
                placeholder="ice cream..."
                onChange={inputChange}
                value={formState.desserts}
            />
            <br/>
            <label htmlFor="supplies">Supplies</label>
            <input
                className="items"
                name="supplies"
                type="text"
                placeholder="napkins..."
                onChange={inputChange}
                value={formState.supplies}
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
