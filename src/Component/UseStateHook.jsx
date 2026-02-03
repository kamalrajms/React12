import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  return (
    <div className="useStateHook">
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
