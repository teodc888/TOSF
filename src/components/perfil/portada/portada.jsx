import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function Portada() {
    const usuarioLogueado = useSelector((state) => state.usuarioLogueado);
    
  return (
    <Container>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="210"
          image="https://i.pinimg.com/originals/96/c4/66/96c4660ffe60041029bd541b3969ca07.png"
        />
            <Button variant="contained" sx={{backgroundColor:"#3e2723",float:"right", marginRight:"5%", marginTop:"1%"}}> Editar Perfil </Button>
            <Avatar   sx={{ width: 150, height: 150, marginLeft:"2%"}} alt="Remy Sharp" src={usuarioLogueado.imagen}/>
        <CardContent>
          <Typography sx={{float:"left"}} >
            <h1>{usuarioLogueado.apodo}</h1>
            <p>{usuarioLogueado.email}</p>
            <LocationOnOutlinedIcon /> {usuarioLogueado.ciudad}, {usuarioLogueado.pais}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
