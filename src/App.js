import "./App.css";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { mostrarUsuarios, userLogin } from "./redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/home/home";
import Perfil from "./components/perfil/perfil";
import Landing from "./components/landing/landing";
import NavBar from "./components/navBar/navBar";
import Mensajes from "./components/mensajes/mensajes";
import Notificaciones from "./components/notificaciones/notificaciones";
import Guardado from "./components/guardado/guardado";
import NoRegistrado from "./components/noRegistrado/noRegistrado";
import NavLeft from "./components/navLeft/navLeft";
import NavRight from "./components/navRight/navRigth";

function App() {
  const dispatch = useDispatch();
  // const [login, setLogin] = useState(false);

  useEffect(() => {
    dispatch(mostrarUsuarios());
  }, [dispatch]);

  const usuarioBD = useSelector((state) => state.usuarios);
  const { isAuthenticated, isLoading, user } = useAuth0();

  const emailUser = usuarioBD.map((el) => el.email);

  const handleLogin = () => {
    dispatch(userLogin(user.email));
  };

  if (isAuthenticated) {
    if (emailUser.includes(user.email)) {
      handleLogin();
      return (
        <div className="App">
          <NavBar />
          <Container maxWidth="m">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container columns={16}>
                <Grid item xs={3} sx={{ display: { sm: "block", xs: "none" } }}>
                  <NavLeft />
                </Grid>
                <Grid item xs={10} sx={{ display: { sm: "block" } }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/mensajes" element={<Mensajes />} />
                    <Route
                      path="/notificaciones"
                      element={<Notificaciones />}
                    />
                    <Route path="/guardado" element={<Guardado />} />
                  </Routes>
                </Grid>
                <Grid item xs={3} sx={{ display: { sm: "block", xs: "none" } }}>
                  <NavRight />
                </Grid>
              </Grid>
            </Box>
          </Container>
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
    if (!isLoading) {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      );
    } else {
      return (
        <div className="App">
          <img
            alt="not image"
            src="https://media2.giphy.com/media/N2lqZb7eIpacsl6T8B/giphy.gif?cid=ecf05e47dy4zh26rbpncugsuh1xn7uc0ib0i7psoap52fzql&rid=giphy.gif&ct=s"
          />
        </div>
      );
    }
  }
}

export default App;
