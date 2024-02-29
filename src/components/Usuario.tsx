import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const tempUser: User = {
    uid: "123",
    name: "hi",
  };

  const login = () => {
    setUser({
      uid: "123456",
      name: "Jimmy",
    });
  };

  return (
    <>
      <h3>Usuario</h3>
      <button onClick={login}>click me</button>
      {!user ? <pre>No hay usuario.</pre> : <pre>{JSON.stringify(user)} </pre>}
    </>
  );
};
