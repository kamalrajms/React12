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
