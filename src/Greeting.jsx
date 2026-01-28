import React from "react";

export default function Greeting(props) {
  return (
    <div>
      <h2>hello everyone</h2>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
    </div>
  );
}
