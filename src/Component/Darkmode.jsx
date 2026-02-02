import React, { useState } from "react";

export default function Darkmode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "25px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} mode
      </button>
      <h3>You are in {dark ? "Dark" : "Light"} mode</h3>
    </div>
  );
}
