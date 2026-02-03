import React from "react";
import "./ConditionalRendering.css";

export default function ConditionalRendering() {
  const user = false;
  return (
    <div className="conditionalrendering">
      {/* Conditional rendering */}
      <h3>Conditional rendering...</h3>
      {user ? <p>Welcome Balck to react.js</p> : <p>Please Login..</p>}
      {/* Logical operator */}
      <h3>Logical operator</h3>
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          possimus id minima, cumque mollitia repellendus cum velit ab qui
          tempore perspiciatis ut asperiores unde temporibus consequatur sed aut
          earum blanditiis.
        </p>
      )}
    </div>
  );
}
