import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Section() {
  return (
    <Container component="section" id="about">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "15vh",
        }}>
        <Typography variant="h2">About ESC</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magnam
          animi! Sint, vero numquam? Nihil repellendus ipsa numquam, expedita
          sit aliquid, laudantium accusamus voluptatem eaque similique eos.
          Nemo, ipsa consequatur.
        </Typography>
      </Box>
    </Container>
  );
}
