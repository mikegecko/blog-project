import { Box, Button, Checkbox, FormControl, FormControlLabel, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createUser } from "../utils/userAPI";

export default function Settings() {

    const [newUser, setNewUser] = useState({username: "", password: "", email: "", name: "", isAdmin: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = createUser(newUser.username, newUser.password, newUser.email, newUser.name, newUser.isAdmin);
        res.then((data) => console.log(data)).catch((err) => console.log(err));
        setNewUser({username: "", password: "", email: "", name: "", isAdmin: false});
    }
    const handleChange = (e) => {
        const {name, value, checked} = e.target;
        setNewUser({...newUser, [name]: name === 'isAdmin' ? checked : value});
    }
  return (
    <>
      <h1>Settings</h1>
      <h4>Content moderation tools</h4>
      <h4>Database tools</h4>
      <h4>Post tools</h4>
      <h4>User tools</h4>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6">Create User</Typography>
        <form onSubmit={handleSubmit} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <TextField label="Username" type="text" name="username" onChange={handleChange} required/>
            <TextField label="Password" type="password" name="password" onChange={handleChange} required/>
            <TextField label="Email" type="email" name="email" onChange={handleChange} />
            <TextField label="Name" type="text" name="name" onChange={handleChange} />
            <FormControlLabel control={<Checkbox />} label="Admin" name="isAdmin" checked={newUser.isAdmin} onChange={handleChange} />
            <Button type="submit" variant="contained">Create</Button>
          </Box>
        </form>
      </Box>
      <h4>Other tools</h4>
    </>
  );
}

export async function settingsLoader() {
  return null;
}
