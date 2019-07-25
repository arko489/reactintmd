import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   
   <div className="App__Aside"></div>
          <div className="App__Form">
          <div className="PageSwitcher">
               <a href='#' className="PageSwitcher__Item">Sign In</a>
               <a href='#' className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>

          </div>
          <div className="FormTitle">
          <a href='#' className="FormTitle__Link">Sign In</a> or <a href='#'
          className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
                 
          </div>
          <div className="FormCentre">
          
            <div className="FormField">
            <label  className="FormField__Label" htmlFor="name" >Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your name"
            name="name" />

          </div>
          <div className="FormField">
            <label  className="FormField__Label" htmlFor="Password" >Password</label>
            <input type="password" id="name" className="FormField__Input" placeholder="Enter your password"
            name="password" />

          </div>
          <div className="FormField">
            <label  className="FormField__Label" htmlFor="Email" >Email</label>
            <input type="text" id="email" className="FormField__Input" placeholder="Enter your email"
            name="email" />

          </div>
        

          </div> 
           </div>
      
    </div>
  );
}

export default App;
