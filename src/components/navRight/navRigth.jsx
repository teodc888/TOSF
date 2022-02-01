import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavRight() {
  const { user } = useAuth0();

  return (
    <div>
      <Card sx={{ maxWidth: 340, margin: "auto" }}>
        <CardMedia
          component="img"
          sx={{ float: "left", width: "110px", height: "110px" }}
          image={user.picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
