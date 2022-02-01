import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Perfil() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user)
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <div>
          <h1>{user.name}</h1>
          <img src={user.picture} alt="Profile" />
          <p>{user.email}</p>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
