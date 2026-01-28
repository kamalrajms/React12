import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";

export default function App() {
  const name = "harish";
  const age = "23";

  const address = "abc colony,salem";
  const number = "123456790";

  const address2 = "madurai";
  const number2 = "64826265954";
  
  const address3 = "chennai";
  const number3 = "54548994999";

  return (
    <div>
      <h1>React.js class</h1>
      <h2>My name is {name}</h2>
      <Greeting name={name} age={age} />
      <DestructuringProps address={address} number={number} />
      <DestructuringProps address={address2} number={number2} />
      <DestructuringProps address={address3} number={number3} />
    </div>
  );
}
