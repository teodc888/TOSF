import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

export default function Perfil() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const usuarioLogueado = useSelector((state) => state.usuarioLogueado);


  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <div>
          <h1>{usuarioLogueado.nombre}</h1>
          <img src={usuarioLogueado.imagen} alt="Profile" />
          <p>{usuarioLogueado.email}</p>
          <p>{usuarioLogueado.telefono}</p>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
