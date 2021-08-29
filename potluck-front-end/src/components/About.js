import React from 'react'
import Nav from "./Nav";
import "../styles/about.css"

function About() {
  return (
    <div>
      <Nav />
      <div className="about-container">

        <div className="about">
          <h2>ABOUT US</h2>
          <p>We are potlucks made easy - hassle free planning, inviting, and collaborating make choosing Potluck Planner a no-brainer for your next big event.</p>
          <p>Create your free account today and customize your own potluck events. You’ll be able to specify needed items, invite your preferred guests, and tag time, date & location. Your guests will then have access to view your event and claim items to bring on the big day.</p>
          <p>You invite your friends and we manage the rest. No more duplicate bags of chips or missing cases of soda - hosts & guests will have an up-to-the-minute picture of any potluck you plan.</p>
          <p>Build a potluck with us - your party of the year awaits!</p>
        </div>
      </div>
    </div>
  )
}

export default About
