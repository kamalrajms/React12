import React, { useContext } from "react";
import Contextbtn from "./Contextbtn";
import { Pass } from "../App";

export default function ContextFields() {
  const { data } = useContext(Pass);
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" value={data.name}/>
      <Contextbtn />
    </div>
  );
}
