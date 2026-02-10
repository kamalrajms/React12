import React, { useState, useCallback } from "react";
import ListCallback from "./ListCallback";

export default function UseCallBackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //   const getItems = () => {
  //     return [number, number + 1, number + 2];
  //   };
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "20px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle them</button>
      <ListCallback getItems={getItems} />
    </div>
  );
}
