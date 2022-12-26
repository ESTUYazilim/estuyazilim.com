import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import validateEmail from "./modules/validateEmail";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    grade: "",
    department: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1231");
    if (!validateEmail(data.email) || data.password.length < 6) return;
    //also extra validation methods
    // register request to server
    // ...
  };
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "72.5vh",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "33%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                error={data.email.length > 0 && !validateEmail(data.email)}
                id="email"
                label="Email Address"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={(e) =>
                  setData({ ...data, department: e.target.value })
                }
                fullWidth
                label="Department"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={(e) => setData({ ...data, grade: e.target.value })}
                fullWidth
                label="Grade"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
                fullWidth
                error={data.password.length != 0 && data.password.length < 6}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox required value="allowExtraEmails" color="primary" />
                }
                label="I aggree to the collection and use of my personal data. *"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
