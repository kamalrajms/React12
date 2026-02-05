import React, { useState, useEffect } from "react";

export default function UseEffectAIP() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // AIP=[{},{},{}... raw data]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // API=[{},{},{},,, object]
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);
  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name}---{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// user=[
//     {name:"akncjd",email:"rvwv"},
//     {name:"akncjd",email:"rvwv"},
//     {name:"akncjd",email:"rvwv"},
// ]
