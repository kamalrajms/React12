import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault(); // prevent reload
    console.log("hello");

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    if (!formData.terms) {
      setError("you must need to accept the checkbox");
      return;
    }
    setError("");
    alert("Form is submitted successfully");
    console.log(formData);
  };
  return (
    <div>
      <h2>Conditional form</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="Enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Enter a password"
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
