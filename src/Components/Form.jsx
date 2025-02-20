import React, { useState } from "react";
import "../Styles/form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = e => {
    e.preventDefault();
    if (username.length > 8) {
        setErrorUsername('');
        setUserColor('green');
    } else {
        setErrorUsername('Username must be 8 characters long');
        setUserColor('red');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        setErrorEmail('');
        setEmailColor('green')
    } else {
        setErrorEmail('Email should have @gmail.com');
        setEmailColor('red')
    }
    if (password.length > 8) {
        setErrorPassword('');
        setPasswordColor('green')
    } else {
        setErrorPassword('Password must be 8 characters long')
        setPasswordColor('red')
    }
    if (password != '' && password == confirmPassword) {
        setErrorConfirmPassword('')
        setConfirmPasswordColor('green')
    } else {
        setErrorConfirmPassword("Passwords didn't match");
        setConfirmPasswordColor('red')
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form action="">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: userColor }}
            placeholder="Name"
          />
          <p className="error">{errorUsername}</p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
            placeholder="Email"
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
            placeholder="Password"
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
            placeholder="Confirm Password"
          />
          <p className="error">{errorConfirmPassword}</p>
          <button  className="submit-btn" onClick={validate}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
