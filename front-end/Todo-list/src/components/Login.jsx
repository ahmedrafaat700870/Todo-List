import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const body = {
    email,
    password,
    // testing =>
    // email: "ahmed@email.com",
    // password: "1234as"
  };
  const loginFunction = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/logIn", body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Login">
      <h1>LogIN</h1>
      <form action="">
        <label calssfor="">Email</label>
        <input
          type="text"
          placeholder="Enter you Email"
          onChange={(e) => setmail(e.target.value)}
          value={email}
        />
        <br />
        <label calssfor="">Password</label>
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <input type="submit" value="Login" onClick={loginFunction} />
      </form>
    </div>
  );
}

export default Login;
