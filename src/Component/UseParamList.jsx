import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseParamList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/blog/${user.email}`}>
              {user.id}..
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
