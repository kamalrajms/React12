import React, { useState, useEffect } from "react";

export default function APIintegration() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>User Email</h2>
      <ul>
        {user.map((user) => (
          <div
            key={user.id}
            style={{ border: "2ps solid black", padding: "10px" }}
          >
            {user.email}
          </div>
        ))}
      </ul>
    </div>
  );
}
