import React from "react";

export default function ListRender() {
  // eg 1
  const fruits = [
    "apple",
    "banana",
    "Orange",
    "mango",
    "Gova",
    "jjbwn",
    "ebfequf",
  ];
  //   eg 2
  const users = [
    { id: 1, name: "Dinesh" },
    { id: 2, name: "harish" },
    { id: 3, name: "Reddy" },
  ];
  return (
    <div>
      <h2>List rendering</h2>
      <h3>Fruit data</h3>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      <h3>User data</h3>
      {users.map((user) => (
        <li key={user.id}>
          {user.id}.{user.name}
        </li>
      ))}
    </div>
  );
}
// user = { id: 1, name: "Dinesh" };
// console.log(user.name);
