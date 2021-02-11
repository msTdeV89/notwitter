import React, { useState } from "react";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/actionTypes";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "Full name") setFullName(value);
    if (name === "Display name") setDisplayName(value);
    if (name === "Date of birth") setDob(value);
    if (name === "Email") setEmail(value);
    if (name === "Password") setPassword(value);
    if (name === "Confirm password") setConfirmPassword(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        dispatch({ type: actions.SIGN_UP, payload: uid });
        console.log(uid);
        db.collection("users").doc(uid).set({
          fullName,
          displayName,
          dob,
          email,
          uid,
          createdAt: new Date().toLocaleDateString(),
        });
        setFullName("");
        setDisplayName("");
        setDob("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        history.push("/notwitter");
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };
  return (
    <section className='page main'>
      <div className='form signup'>
        <form
          onSubmit={(e) => {
            if (password === confirmPassword && password.length >= 6) {
              handleSubmit(e);
            }
          }}
        >
          <p>Provide your details.</p>
          <Input
            name='Full name'
            type='text'
            ph='Joe Doe'
            value={fullName}
            func={(e) => handleValue(e)}
            required
          />
          <Input
            name='Display name'
            type='text'
            ph='jDoe'
            value={displayName}
            func={(e) => handleValue(e)}
            required
          />
          <Input
            name='Date of birth'
            type='number'
            ph='dd/mm/yyyy'
            value={dob}
            func={(e) => handleValue(e)}
            required
          />
          <Input
            name='Email'
            type='text'
            ph='example@gmail.com'
            value={email}
            func={(e) => handleValue(e)}
            required
          />
          <Input
            name='Password'
            type='password'
            ph='min 6 signs'
            value={password}
            func={(e) => handleValue(e)}
            required
          />
          <Input
            name='Confirm password'
            type='password'
            ph='min 6 signs'
            value={confirmPassword}
            func={(e) => handleValue(e)}
            required
          />
          <Link to='/notwitter'>Already have an account?</Link>
          <Button title='Sign Up' type='submit' cls='formBtn' />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
