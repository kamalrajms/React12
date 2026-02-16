import React from "react";
import useAPIintgration from "../Component/useAPIintegration";

export default function Contact() {
  const {
    data: user,
    error,
    loading,
  } = useAPIintgration("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h2>Contact component</h2>
      {user.map((user) => (
        <div key={user.id} style={{ borderBottom: "1px solid #000" }}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
