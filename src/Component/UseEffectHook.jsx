import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCOunt] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log(`THe count changes to ${count},${num}`);
  }, [count, num]);
  return (
    <div>
      <h2>Hello</h2>
      <h2>
        count:{count}
        {num}
      </h2>
      <button onClick={() => setCOunt(count + 1)}>increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
}
