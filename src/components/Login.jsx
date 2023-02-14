import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form } from "react-bootstrap";
import classes from "./Login.module.css";
import images from "../utils/image_imports";
import { alertClasses } from '@mui/material';

function Login(props) {
  const [inValid, setInValid] = useState(true);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const admin = {
    email: "admin@admin",
    password: "123456789",
  }
  const { email, password } = form;
  let letloggedin = admin.email === form.email && admin.password === form.password;
  useEffect(() => {
    let timeout = setTimeout(() => {

      setInValid(email.includes('@') && password.length >= 6);
    }, 1000);

    return () => {
      console.log("Clear timeout");
      clearTimeout(timeout);
    };
  }, [email, password]);

  const getValueFromInputHandler = (e) => {
    setForm((prevValue) => {
      return {
        ...prevValue,

        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = () => {
    if (letloggedin) {
      localStorage.setItem("isLoggedin", true)
      navigate("/");
    }else{
      alert("Email or password wrong!");
    }
  };
  return (
    <div className={`${classes.bgImg}`}>
      <div className={`${classes.layer}`}>
        <Card className={classes.login}>
          {props.isLoggedin && <p>Email or Password is invalid</p>}
          <Form className={`${classes.form}`} onSubmit={submitHandler} autoComplete="off">
            <img className={`${classes.logo}`} src={images.logo} width={100} />
            <div className={`${classes.control}`}>
              <label className='input-group-text' htmlFor="email">E-Mail</label>
              <Form.Control
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                value={form.email}
                onChange={getValueFromInputHandler}
              />
            </div>
            <div className={`${classes.control}`}>
              <label className='input-group-text' htmlFor="password">Password</label>
              <Form.Control
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                value={form.password}
                onChange={getValueFromInputHandler}
              />
            </div>
            <div className={classes.actions}>
              <Button
                type='submit'
                className="btn btn-outline-danger"
                disabled={!inValid}              >
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login