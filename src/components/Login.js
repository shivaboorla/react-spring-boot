import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import login from "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", { username, password });
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
          sx={{ alignItems: "", maxWidth: 400, padding: 2 }}
        >
          <Typography variant="h4">Login</Typography>
          <form onSubmit={handleSubmit} className="">
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User Name"
              className="textField"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className=""
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
