import { IconButton } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from '@mui/icons-material/Email';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavLeft() {

  const {logout} = useAuth0();

  const navigate = useNavigate();

  const handleClickPerfil = (e) => {
    navigate("/perfil");
  };
  const handleClickNotificaciones= (e) => {
    navigate("/notificaciones");
  };
  const handleClickMensajes = (e) => {
    navigate("/mensajes");
  };
  const handleClickGuardado = (e) => {
    navigate("/guardado");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6} columns={16}>
          <Grid item xs={16}>
            <IconButton color="inherit">
              <HomeIcon />
              INICIO
            </IconButton>
          </Grid>
          <Grid item xs={16}>
            <IconButton color="inherit" onClick={handleClickNotificaciones}>
              <NotificationsIcon />
              NOTIFICACIONES
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit" onClick={handleClickMensajes}>
              <EmailIcon />
              MENSAJES
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit" onClick={handleClickGuardado}>
              <BookmarkBorderIcon />
              GUARDADO
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit" onClick={handleClickPerfil}>
              <AccountBoxIcon />
              PERFIL
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit" onClick={() => logout()}>
              <LogoutIcon />
              CERRAR SESION
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
