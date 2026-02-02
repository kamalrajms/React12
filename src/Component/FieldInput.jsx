import React, { useState } from "react";

export default function FieldInput() {
  const [name, setName] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  console.log(name);

  return (
    <div>
      <label htmlFor="">name</label>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checkbox}
        onChange={() => setCheckBox(!checkbox)}
      />

      {/* <select name="" id="">
        <option value="apple">apple</option>
        <option value="banana">apple</option>
        <option value="cat">apple</option>
      </select> */}
    </div>
  );
}
