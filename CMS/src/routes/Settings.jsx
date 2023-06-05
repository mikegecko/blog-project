import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox,  FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { createUser, getUsers, logout } from "../utils/userAPI";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { router } from "../main";
import jwt_decode from "jwt-decode";
import PersonIcon from '@mui/icons-material/Person';
import { deleteUser } from "../utils/userAPI";

export default function Settings() {

    const [newUser, setNewUser] = useState({username: "", password: "", email: "", name: "", isAdmin: false});
    const [token , setToken] = useState(localStorage.getItem('blog-token'));
    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);
    const [delUserID, setDelUserID] = useState(null);

    const handleUserClick = (userid) => {
      console.log(userid);
    }

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
        router.navigate('/login');
    }

    const onDeleteChange = (e) => {
      const { userid } = e.target;
      setDelUserID(userid);
    }

    const onDeleteSubmit = (e) => {
      const res = deleteUser(delUserID);
      res.then((data) => console.log(data)).catch((err) => console.log(err));
      // Show snackbar for success / failure
    }

    const authStatus = () => {
        //BUG: Token shows authorized even if expired
        const token = localStorage.getItem('blog-token');
        if(token) {
            return(
                <Typography sx={{color: "green"}}>Authorized</Typography>
            )
        }
        if(!token) {
            return(
                <Typography sx={{color: "red"}}>Unauthorized</Typography>
            )
        }
    }

    const retriveUserList = (token) => {
        const res = getUsers(token);
        res.then((data) => { 
            setUserList(data);
            //console.log(data);
        }).catch((err) => console.log(err));
    }

    const userInfo = (token) => {
        const decoded = jwt_decode(token);
        return(decoded);
    }

    useEffect(() => {
        const token = localStorage.getItem('blog-token')
        if(token) {
            setUser(userInfo(token));
            retriveUserList(token);
        }
    },[])

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'auto', height: '100vh'}}>
      <h1>Settings</h1>
      <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', padding: '1rem',  justifyContent: 'center', }}>
        <Box>
      <h4>Content moderation tools</h4>
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Content mod Stuff</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box>
              <Typography>Content mod Stuff</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box>
      <h4>Database tools</h4>
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Database Stuff</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box>
              <Typography>Database Stuff</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box>
      <h4>Post tools</h4>
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Post Stuff</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box>
              <Typography>Post Stuff</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <h4>User tools</h4>
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
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Delete User</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:  "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", width: "100%"}}> 
            <TextField label="User ID" type="text" name="userid" value={delUserID} onChange={onDeleteChange} />
            <Button variant="contained" onSubmit={onDeleteSubmit}>Confirm Delete</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>User List</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <List sx={{width: "100%"}}>
            {userList ? userList.map((user) => {
                return(
                    <ListItem key={user._id} disablePadding >
                        <ListItemButton key={user._id} onClick={(e) => handleUserClick(user._id)}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText key={user._id} primary={user.username} secondary={user._id} />
                        </ListItemButton>
                    </ListItem>
                )
            }): null}
            </List>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box>
      <h4>Other tools</h4>
      <Accordion sx={{width: "100%"}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Account Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{display:  "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", width: "100%"}}>
            <Typography>Auth Status:{authStatus()}</Typography>
            <Button onClick={handleLogout} variant="contained">Logout</Button>
            <Typography>Username:{user.username}</Typography>
            <Typography>Email:{user.email}</Typography>
            <Typography>Name:{user.name}</Typography>
            <Typography>Admin:{user.isAdmin ? "True" : "False"}</Typography>
            <Typography>ID:{user.id}</Typography>
            <Typography>Created:{user.date}</Typography>
            <Typography>Last Login:</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
      </Box>
    </Box>
  );
}

export async function settingsLoader() {
  return null;
}
