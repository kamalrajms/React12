import React, { useState } from "react";

export default function UserUseState() {
  const [user, setUser] = useState(true);
  console.log(user);

  return (
    <div className="userstate">
      {user ? <h2>Welcome back...!</h2> : <h2>Please Login..</h2>}
      {user && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta saepe
          adipisci qui corrupti laboriosam nobis quae nulla doloribus accusamus,
          impedit eligendi odio reprehenderit ipsa consequuntur nisi ducimus
          asperiores iure earum!
        </p>
      )}
      <button onClick={() => setUser(!user)}>Sign {user ? "out" : "in"}</button>
    </div>
  );
}

// !true=false
// !false=true
