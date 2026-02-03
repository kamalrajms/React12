import React, { useState } from "react";
import kamal from "./RegisterFrom.module.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "555",
  });

  //   console.log(formData.age);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      //   [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={kamal.Register}>
      <h2>Register form</h2>
      <input
        type="text"
        placeholder="Enter a name"
        name="name"
        value={formData.name}
        onChange={handleInput}
      />
      <input
        type="email"
        placeholder="Enter a Email"
        name="email"
        value={formData.email}
        onChange={handleInput}
      />
      <input
        type="number"
        placeholder="Enter a age"
        name="age"
        value={formData.age}
        onChange={handleInput}
      />
    </div>
  );
}
