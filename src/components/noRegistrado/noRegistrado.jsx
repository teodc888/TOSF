import React, { useState } from "react";
import { Box, Grid, Input, Stack, TextField } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { createUsuario } from "../../redux/actions/index";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function NoRegistrado() {
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const { user } = useAuth0();

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    apodo: user.nickname,
    imagen: user.picture,
    email: user.email,
    telefono: "",
    pais: "",
    ciudad: "",
    fechaNacimiento: "",
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Product_photo ");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djtkn6o7r/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setInput({ ...input, imagen: file.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createUsuario(input));
    setInput({
      nombre: "",
      apellido: "",
      apodo: "",
      imagen: "",
      email: "",
      telefono: "",
      pais: "",
      ciudad: "",
      fechaNacimiento: "",
    });
    window.location.reload();
  };

  console.log(input);

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <h1>Formulario para el ingreso a T.O.S</h1>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ width: "100%", marginTop: "50px" }}
          alignItems="center"
          justify="center"
        >
          <Grid container spacing={2} columns={16}>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="nombre"
                label="NOMBRE"
                variant="outlined"
                name="nombre"
                value={input.nombre}
                required
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="apellido"
                label="APELLIDO"
                variant="outlined"
                name="apellido"
                value={input.apellido}
                required
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="apodo"
                label="APODO"
                variant="outlined"
                name="apodo"
                required
                value={input.apodo}
                onClick={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="email"
                label="EMAIL"
                variant="outlined"
                name="email"
                required
                value={input.email}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="FECHA DE NACIMIENTO"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    setInput({
                      ...input,
                      fechaNacimiento:
                        newValue.getDate() +
                        "/" +
                        (newValue.getMonth() + 1) +
                        "/" +
                        newValue.getFullYear(),
                    });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="telefono"
                label="TELEFONO"
                variant="outlined"
                name="telefono"
                required
                value={input.telefono}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="pais"
                label="PAIS"
                variant="outlined"
                name="pais"
                required
                value={input.pais}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <TextField
                id="ciudad"
                label="CIUDAD"
                variant="outlined"
                name="ciudad"
                required
                value={input.ciudad}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <img src={input.imagen} alt="j" />
            </Grid>
            <Grid item xs={16} sx={{ marginBottom: "2%" }}>
              <Input type="file" name="imagen" onChange={handleFiles} />
            </Grid>
          </Grid>
        </Box>
        <button> ENVIAR </button>
      </form>
    </div>
  );
}
