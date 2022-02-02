import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavLeft from "../navLeft/navLeft";
import NavRight from "../navRight/navRigth";
import Historias from "../historias/historias";
export default function Home() {

  return (
    <div>
      <Container maxWidth="m">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container columns={16}>
            <Grid item xs={3} sx={{ display: { sm: "block", xs: "none" } }}>
              <NavLeft />
            </Grid>
            <Grid item xs={10} sx={{ display: { sm: "block", xs: "block" } }}>
              <Grid container spacing={6} columns={16}>
                <Grid item xs={16}>
                  <Historias />
                </Grid>
                <Grid item xs={16}>
                  <h1>FEET</h1>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} sx={{ display: { sm: "block", xs: "none" } }}>
              <NavRight />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
