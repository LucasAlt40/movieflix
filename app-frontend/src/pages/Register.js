import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChangeValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:8080/user/register",
      data: values,
    };
    await axios
      .request(options)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <form action="/user/register" method="POST">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Fulano de tal"
        required
        onChange={handleChangeValue}
        value={values.username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        placeholder="secret..."
        onChange={handleChangeValue}
        value={values.password}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
