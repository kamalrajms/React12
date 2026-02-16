import React from "react";
import UseParamList from "../Component/UseParamList";
import useCustomHook from "../Component/useCustomHook";

export default function Home() {
  const { count, increment, decrement, reset } = useCustomHook(10);
  return (
    <div>
      <h3>count:{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <h2>Home component</h2>
      <UseParamList />
    </div>
  );
}
