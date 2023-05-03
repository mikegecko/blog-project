import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControl, FormControlLabel, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createUser, logout } from "../utils/userAPI";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

    const handleLogout = () => {
        console.log('Logged out');
        logout();
    }

    const authStatus = () => {
        if(localStorage.getItem('blog-token')) {
            return(
                <Typography sx={{color: "green"}}>Authorized</Typography>
            )
        }
        if(!localStorage.getItem('blog-token')) {
            return(
                <Typography sx={{color: "red"}}>Unauthorized</Typography>
            )
        }
    }
    
  return (
    <Box>
      <h1>Settings</h1>
      <h4>Content moderation tools</h4>
      <h4>Database tools</h4>
      <h4>Post tools</h4>
      <h4>User tools</h4>
      <Box>
      <Accordion sx={{width: "100%"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Create User</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width: "100%"}} disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Update User</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width: "100%"}} disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Delete User</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>
      </Box>
      <h4>Other tools</h4>
      <Box>
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Account Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{display:  "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", width: "100%"}}>
            <Typography>Auth Status:{authStatus()}</Typography>
            <Button onClick={handleLogout} variant="contained">Logout</Button>
            <Typography>Username:</Typography>
            <Typography>Email:</Typography>
            <Typography>Name:</Typography>
            <Typography>Admin:</Typography>
            <Typography>Created:</Typography>
            <Typography>Last Login:</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  );
}

export async function settingsLoader() {
  return null;
}
