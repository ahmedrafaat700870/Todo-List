import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const NewRegistertion = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const body = { userName: name, email: email, password: password };
    axios
      .post("http://localhost:5000/Regester", body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <form className="Register">
      <input
        type="text"
        id="name"
        placeholder="Enter you name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        id="email"
        placeholder="Enter your email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="passowrd"
        id="Passowrd"
        placeholder="Enter your Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input type="submit" onClick={NewRegistertion} />
    </form>
  );
}
