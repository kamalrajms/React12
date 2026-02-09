import React, { useContext } from "react";
import { Pass } from "../App";

export default function Contextbtn() {
  const { mode, setMode } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setMode(mode === "light" ? "black" : "light")}>
        Theme
      </button>
      <button>Sign in</button>
    </div>
  );
}
