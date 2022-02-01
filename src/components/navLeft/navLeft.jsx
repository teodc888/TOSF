import { Button, IconButton } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from '@mui/icons-material/Email';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavLeft() {
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
            <IconButton color="inherit">
              <NotificationsIcon />
              NOTIFICACIONES
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit">
              <EmailIcon />
              MENSAJES
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit">
              <BookmarkBorderIcon />
              GUARDADO
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit">
              <AccountBoxIcon />
              PERFIL
            </IconButton>
          </Grid>
          <Grid item xs={16}>
          <IconButton color="inherit">
              <LogoutIcon />
              CERRAR SESION
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
