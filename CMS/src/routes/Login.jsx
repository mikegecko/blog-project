import { useState } from "react";
import { login } from "../utils/userAPI";
import { Box, Button, TextField, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from '../components/Themes';
import { router } from "../main";

export default function Login() {
    const [colorMode, setColorMode] = useState('light');
    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    const themeControl = () => {
        if(colorMode === 'light') {
            return(darkTheme);
        }
        if(colorMode === 'dark') {
            return(lightTheme);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = login(loginInfo.username, loginInfo.password);
        res.then((data) => (console.log(data), data.success ? router.navigate('/home') : console.log(data))).catch((err) => console.log(err));
        setLoginInfo({username: "", password: ""});
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value});
    }

    return (
        <ThemeProvider theme={themeControl()}>
        <Box>
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <TextField variant="outlined" type="text" label="Username" name="username" value={loginInfo.username} onChange={handleChange} />
                <TextField variant="outlined" type="password" label="Password" name="password" value={loginInfo.password} onChange={handleChange} />
                <Button variant="contained" type="submit">Login</Button>
                </Box>
            </form>
            
        </Box>
        </ThemeProvider>
    )
}

export async function loginLoader(){
    return null
}