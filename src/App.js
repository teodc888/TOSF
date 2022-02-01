import "./App.css";
import {Routes, Route} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/home/home";
import Perfil from "./components/perfil/perfil";
import Landing from "./components/landing/landing";
import NavBar from "./components/navBar/navBar";
import Mensajes from "./components/mensajes/mensajes";
import Notificaciones from "./components/notificaciones/notificaciones";
import Guardado from "./components/guardado/guardado";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/mensajes" element={<Mensajes />} />
            <Route path="/notificaciones" element={<Notificaciones />} />
            <Route path="/guardado" element={<Guardado />} />
          </Routes>
        </>
      ) : isLoading ? (
        <img src="https://media2.giphy.com/media/N2lqZb7eIpacsl6T8B/giphy.gif?cid=ecf05e472det7zwlntlk1gxtac1jchnlanwcsifmn2bmcqpp&rid=giphy.gif&ct=s" alt="j" />
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
