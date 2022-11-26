import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel/Carousel";
import ProgressBar from "../components/ProgressBar";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
      <Container component="header" sx={{ mt: 4, mb: 2 }}>
        <Typography variant="body1">Stay Tuned!</Typography>
        <Typography variant="body2">
          'estuyazilim.com' is currently under construction
        </Typography>
        <ProgressBar />
      </Container>
      <Carousel
        next={() => {
          /* Do stuff */
        }}
        prev={() => {
          /* Do other stuff */
        }}></Carousel>
    </Box>
  );
}
