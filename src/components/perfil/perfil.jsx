import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import NavBarPerfil from "./navBarPerfil/navBarPerfil";
import Portada from "./portada/portada";
export default function Perfil() {
  const { isAuthenticated, isLoading } = useAuth0();
  const usuarioLogueado = useSelector((state) => state.usuarioLogueado);

  console.log(usuarioLogueado);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <div>
          <NavBarPerfil />
          <Portada />
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
