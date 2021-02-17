import React, { useState, useEffect } from "react";
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
  const [err, setErr] = useState("Provide your details.");
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setErr("Provide your details.");
    }, 3000);
  }, [err]);

  const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "Full name") setFullName(value);
    if (name === "Display name") setDisplayName(value);
    if (name === "Date of birth") setDob(value);
    if (name === "Email") setEmail(value);
    if (name === "Password") setPassword(value);
    if (name === "Confirm password") setConfirmPassword(value);
  };
  const handleSubmit = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        console.log(uid);
        db.collection("users").doc(uid).set({
          fullName,
          displayName,
          dob,
          email,
          uid,
          createdAt: new Date().toLocaleDateString(),
        });
        dispatch({ type: actions.SIGN_UP, payload: uid });
        localStorage.setItem("notwitterUser", JSON.stringify(uid));
        setFullName("");
        setDisplayName("");
        setDob("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        history.push("/notwitter");
      })
      .catch((err) => {
        setErr(err.message);
        console.log(err.code);
        console.log(err.message);
      });
  };

  const validate = () => {
    if (fullName.length <= 6) {
      setErr("Full name should be at least 6 characters.");
    } else if (!/^[a-z\s]+$/i.test(fullName)) {
      setErr("Full name should contain only a letters.");
    } else if (displayName.length < 3) {
      setErr("Display name should be at least 3 characters.");
    } else if (dob.length < 8) {
      setErr("Date of birth should contain 8 numbers.");
    } else if (!/^[0-9]+$/.test(dob)) {
      setErr("Date of birth should contain only numbers.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Invalid email.");
    } else if (password !== confirmPassword) {
      setErr("Passwords not match.");
    } else if (password.length < 6 || confirmPassword < 6) {
      setErr("Password should contain at least 6 characters.");
    } else {
      return handleSubmit();
    }
  };
  return (
    <section className='page main'>
      <div className='form signup'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
        >
          <p>{err}</p>
          <Input
            name='Full name'
            type='text'
            ph='Joe Doe'
            value={fullName}
            func={(e) => handleValue(e)}
            required
            err={/^[a-z\s]+$/i.test(fullName) && fullName.length > 3}
          />
          <Input
            name='Display name'
            type='text'
            ph='min 3 char'
            value={displayName}
            func={(e) => handleValue(e)}
            required
            err={displayName.length >= 3}
          />
          <Input
            name='Date of birth'
            type='number'
            ph='ddmmyyyy'
            value={dob}
            func={(e) => handleValue(e)}
            required
            err={/^[0-9]+$/.test(dob) && dob.length === 8}
          />
          <Input
            name='Email'
            type='text'
            ph='example@gmail.com'
            value={email}
            func={(e) => handleValue(e)}
            required
            err={/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
          />
          <Input
            name='Password'
            type='password'
            ph='min 6 char'
            value={password}
            func={(e) => handleValue(e)}
            required
            err={password.length >= 6 && password === confirmPassword}
          />
          <Input
            name='Confirm password'
            type='password'
            ph='min 6 char'
            value={confirmPassword}
            func={(e) => handleValue(e)}
            required
            err={confirmPassword.length >= 6 && password === confirmPassword}
          />
          <Link to='/notwitter'>Already have an account?</Link>
          <Button title='Sign Up' type='submit' cls='formBtn' />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
