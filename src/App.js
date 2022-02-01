import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import Perfil from "./components/perfil/perfil";
import Landing from "./components/landing/landing";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Logout />
          <Perfil />
        </>
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
