import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const apiUrl = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl + "/auth/login", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Card
          variant="outlined"
          sx={{ alignItems: "", maxWidth: 400, padding: 3 }}
        >
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User Name"
              sx={{ mb: 2 }}
            />
            <br />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              sx={{ mb: 2 }}
            />
            <br />
            <Button variant="outlined" size="large">
              Login
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
