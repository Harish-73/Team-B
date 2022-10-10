import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Card, Form, Row, Col, Button, Container} from 'react-bootstrap';
import Admin from "./Admin"
import {Link} from 'react-router-dom';
import Student from './Student';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "./styles.css";

function Login() {
  const marginTop = {marginTop:"20px"};

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user",
      password: "1234"
    },
    {
      username: "user1",
      password: "4321"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const renderPage = (
      <div>
        <Link to={"/list"} className="nav-link" >admin </Link>
      </div>
      );

  // JSX code for login form
  const renderForm = (
    
    <div className="app">
      <div class="box">
            <div className="login-form">
              <div className="text-center title"><AdminPanelSettingsIcon style={{"font-size":"90px"}}/><br /> Admin Acess</div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <br />
        <div className="button-container">
            
        <Button size="lg" variant="outline-success" type="submit">
                        Submit
        </Button>
        </div>
      </form>
    </div>              
    </div>
    {/* <div className="reg-form text-center">
    <HowToRegIcon style={{"font-size":"100px"}}/>
    <div className="text-center">
    
                    <Button variant="outline-primary" className=" ms-5 me-5 fs-3" style={{"padding-bottom":"90px","padding-top":"50px","padding-left":"30px","padding-right":"30px"}} > 
                        <Link to={"/register"} className="nav-link" > <br /> Register Here </Link>
                    </Button>               
                </div>
    </div> */}
    </div>
    </div>
  );

  return (
    <div>
        {isSubmitted ? renderPage : renderForm}
        
        <div>
              
        </div>
    </div>
  );
}

export default Login;