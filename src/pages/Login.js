import React, { useState } from "react";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions/actionTypes";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "Email") setEmail(value);
    if (name === "Password") setPassword(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch({
          type: actions.LOGIN,
          payload: userCredential.user.uid,
        });
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };
  return (
    <div className='form login'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Already registered?</p>
        <Input
          name='Email'
          type='text'
          value={email}
          func={(e) => handleValue(e)}
        />
        <Input
          name='Password'
          type='password'
          value={password}
          func={(e) => handleValue(e)}
        />
        <Link to='signup'>Don't have an account?</Link>
        <Button title='Log In' type='submit' cls='formBtn' />
      </form>
    </div>
  );
};

export default Login;
