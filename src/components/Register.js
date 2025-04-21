import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const apiUrl = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl + "/auth/register", {
        username,
        password,
        email,
      });
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Card
          variant="outlined"
          sx={{ alignItems: "", maxWidth: 400, padding: 2 }}
        >
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              sx={{ mb: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              sx={{ mb: 2 }}
            />
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              sx={{ mb: 2 }}
            />
            <br />
            <Button variant="outlined" size="large" type="submit">
              Register
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default Register;
