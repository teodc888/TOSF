import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from "@mui/material/Container";
import {useSelector} from "react-redux";
import { IconButton } from "@mui/material";
export default function NavBarPerfil() {
    const usuarioLogueado = useSelector((state) => state.usuarioLogueado);
  return (
    <Container>
      <Box>
        <AppBar position="static" sx={{ bgcolor: "#3e2723", color: "white" }}>
          <Toolbar>
            <IconButton >
                <ArrowBackIcon sx={{color:"white"}} />
            </IconButton>
            <Typography>
              <h4>{usuarioLogueado.apodo}</h4>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
