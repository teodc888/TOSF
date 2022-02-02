import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/home/home";
import Perfil from "./components/perfil/perfil";
import Landing from "./components/landing/landing";
import NavBar from "./components/navBar/navBar";
import Mensajes from "./components/mensajes/mensajes";
import Notificaciones from "./components/notificaciones/notificaciones";
import Guardado from "./components/guardado/guardado";
import NoRegistrado from "./components/noRegistrado/noRegistrado";
import { mostrarUsuarios } from "./redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostrarUsuarios());
  }, []);

  const usuarioBD = useSelector((state) => state.usuarios);
  const { isAuthenticated, isLoading, user } = useAuth0();

  const emailUser = usuarioBD.map((el) => el.email);


  if (isAuthenticated) {
    if (emailUser.includes(user.email)) {
      return (
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/mensajes" element={<Mensajes />} />
            <Route path="/notificaciones" element={<Notificaciones />} />
            <Route path="/guardado" element={<Guardado />} />
          </Routes>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<NoRegistrado />} />
          </Routes>
        </div>
      );
    }
  } else {
    return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
      </div>
    );
  }
}

export default App;
