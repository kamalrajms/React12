import React, { useState, useEffect } from "react";

export default function ListCallback({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);
  return (
    <div>
      {items.map((items) => (
        <div key={items}>{items}</div>
      ))}
    </div>
  );
}


    // const handleClick = () => {
    // console.log("Clicked");
    // };

    // Every time the component re-renders, this function is recreated.

    // If we pass this function to a child component, the child will also re-render — even if nothing changed.

    // useCallback solves this problem.