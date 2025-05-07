import React, { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const userNames = data.map((user) => user.name);
        setUser(userNames);
      })
      .catch(() => setError("Error fetching User"));
  }, []);
  return (
    <div>
      <h1>users</h1>
      {error && <p>{error}</p>}
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
