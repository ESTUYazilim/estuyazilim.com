import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Container>
      <Typography variant="body1" color="text.secondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {" ESTÜ Software Community"}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"estuyazilim.com - made with ❤️ - "}
        <Link color="inherit" href="https://github.com/ESTUYazilim/estuyazilim.com">
          see github code
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"to contact please refer to "}
        <Link color="inherit" href="mailto:mail@estuyazilim.com">
          mail@estuyazilim.com
        </Link>
      </Typography>
    </Container>
  );
}

export default function Footer() {
  return (<Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      minHeight: "10vh",
    }}
  >
    <Copyright />
  </Box>);
}