import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import Perfil from "./components/perfil/perfil";

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
        <Login />
      )}
    </div>
  );
}

export default App;
