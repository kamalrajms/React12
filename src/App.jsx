import React, { useState, useContext, createContext } from "react";
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
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";
import UseReducerHook from "./Context/UseReducerHook";
import UseReducerForm from "./Context/UseReducerForm";
import UseCallBackHook from "./Component/UseCallBackHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Service from "./Router/Service";
import Contact from "./Router/Contact";
import WebDEV from "./Router/WebDEV";
import AppDev from "./Router/AppDev";
import BlogDetailes from "./Component/BlogDetailes";

export const Pass = createContext();

export default function App() {
  const name = "harish";
  const age = "23";

  const address = "abc colony,salem";
  const number = "123456790";

  const address2 = "madurai";
  const number2 = "64826265954";

  const address3 = "chennai";
  const number3 = "54548994999";

  const display = false;

  const [mode, setMode] = useState("light");
  const data = { name: "Reddy" };
  console.log(mode);

  return (
    <div>
      {display && (
        <div>
          <UseCallBackHook />
          <UseReducerForm />
          <UseReducerHook />
          <div style={{ border: "2px solid black" }}>
            <Pass.Provider value={{ mode, setMode, data }}>
              <ContextForm />
            </Pass.Provider>
          </div>
          <div style={{ border: "2px solid black", padding: "20px" }}>
            <h2>App component</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
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
      )}
      <BrowserRouter>
        <div className="header">
          <Link to={"/Home"}>Home</Link>
          <Link to={""}>About</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="" element={<About />} />
          <Route path="/Service" element={<Service />}>
            <Route path="" element={<WebDEV />} />
            <Route path="Appdevelopment" element={<AppDev />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetailes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
