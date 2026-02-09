import React, { useContext } from "react";
import ContextFields from "./ContextFields";
import { Pass } from "../App";
export default function ContextForm() {
  const { mode, setMode, data } = useContext(Pass);
  return (
    <div className={mode}>
      <h3>Context form</h3>
      <h2> Welcome back</h2>
      <ContextFields />
    </div>
  );
}
