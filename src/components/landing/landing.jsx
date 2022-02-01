import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function Landing() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Box sx={{ flexGrow: 10 }}>
        <Grid container spacing={8} columns={16}>
          <Grid item xs={8}>
            <h1>Bienvenidos a T.O.S</h1>
            <Button onClick={() => loginWithRedirect()}>INICIAR</Button>
            <Button onClick={() => loginWithRedirect()}>REGISTRAR</Button>
          </Grid>
          <Grid item xs={8}>
            <img src="https://images5.alphacoders.com/807/thumb-1920-807598.jpg" alt="TOS" width="100% " height="100%" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
