import React, { useState, useEffect } from "react";
import { data } from "react-router-dom";

export default function CREDOperation() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const addItems = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users/", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())

        // data={
        //     name:"kumar",
        //     email:"uufhw@gmail"
        // }
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          //   data={
          //     name:"kumar",
          //     email:"uufhw@gmail",
          //     id:11
          // }
          setUser([...user, newUser]);
          setName("");
          setEmail("");
        });
    }

    
  };
  const handleDel = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setUser((user) => {
            return user.filter((user) => user.id !== id);
          });
        });

        // user=[{},{},{},{},{},{},,,,]
        //  id= it represent particular obj id value
    };
  return (
    <div>
      <h1>CRED operation</h1>
      <table>
        <thead>
          <tr>
            <td>s.no</td>
            <td>Name</td>
            <td>Email</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDel(user.id)}>delete</button>
                <button>edit</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItems}>update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
