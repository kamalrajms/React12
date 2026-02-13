import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseIDHook from "../Component/UseIDHook";

export default function About() {
  const page = useNavigate();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 10) {
      page("/Contact");
    }
  }, [count]);
  return (
    <div>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <h2>About component</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>

      <button onClick={() => page("/Contact")}>Move to contact</button>
    </div>
  );
}
