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
    guests: [],
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
      .post("https://reqres.in/api", formState)
      .then((res) => {
        setHost(res.data);
        console.log(res.data);
        console.log("Submit Success", res);
      })
      .catch((err) => console.log(err));
  };

  const inputChange = (evt) => {
      const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setFormState({ ...formState, [evt.target.name]: value });
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
        <div className="item-container">
          <div className="Potluck-items">
            <h4>Drinks</h4>
            <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="soda"
            />
                Soda 
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="water"
            />
                Water
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="juice"
            />
                Juice
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="lemonade"
            />
                Lemonade  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="beer"
            />
                Beer              
          </div>
          <div className="Potluck-items">
            <h4>Sides</h4>
            <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="vegetables"
            />
                Vegetables 
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="bread"
            />
                Bread
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="chips"
            />
                Chips
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="nuts"
            />
                Nuts  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="salad"
            />
                Salad  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="crackers"
            />
                Crackers   
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="beans"
            />
                Beans         
          </div>
          <div className="Potluck-items">
            <h4>Entrees</h4>
            <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="roasted-vegetables"
            />
                Roasted Vegetables 
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="chicken"
            />
                Chicken
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="burgers"
            />
                Burgers
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="meatballs"
            />
                Meatballs  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="Ribs"
            />
                Ribs  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="pizza"
            />
                Pizza   
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="pasta"
            />
                Pasta         
          </div>
          <div className="Potluck-items">
            <h4>Dessert</h4>
            <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="cookies"
            />
                Cookies 
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="icecream"
            />
                Ice Cream
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="pie"
            />
                Pie
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="cake"
            />
                Cake  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="bars"
            />
                Bars  
                <input
                className="items"
                name="items"
                type="checkbox"
                onChange={inputChange}
                value="doughnuts"
            />
                Doughnuts         
          </div>
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
