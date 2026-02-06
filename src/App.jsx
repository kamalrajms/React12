import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRender from "./Component/ListRender";
import UseStateHook from "./Component/UseStateHook";
import UserUseState from "./Component/UserUseState";
import Darkmode from "./Component/Darkmode";
import FieldInput from "./Component/FieldInput";
import RegisterForm from "./Component/RegisterForm";
import ConditionalForm from "./Component/ConditionalForm";
import UseEffectHook from "./Component/UseEffectHook";
import UseeffectTimer from "./Component/UseeffectTimer";
import StopWatch from "./Component/StopWatch";
import UseEffectAIP from "./Component/UseEffectAIP";
import UseRefHook from "./Component/UseRefHook";

export default function App() {
  const name = "harish";
  const age = "23";

  const address = "abc colony,salem";
  const number = "123456790";

  const address2 = "madurai";
  const number2 = "64826265954";

  const address3 = "chennai";
  const number3 = "54548994999";

  const display = true;

  return (
    <div>
      <UseRefHook />
      <UseEffectAIP />
      <StopWatch />
      <UseeffectTimer />
      <UseEffectHook />
      <ConditionalForm />
      <RegisterForm />
      <FieldInput />
      <Darkmode />
      <UserUseState />
      <UseStateHook />
      <ListRender />
      <ConditionalRendering />
      <h1>React.js class</h1>
      <h2>My name is {name}</h2>
      <Greeting name={name} age={age} />
      <DestructuringProps address={address} number={number} />
      <DestructuringProps address={address2} number={number2} />
      <DestructuringProps address={address3} number={number3} />
    </div>
  );
}
