import { useState } from "react";
import { login } from "../utils/userAPI";
import { Box, Button, TextField, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from '../components/Themes';
import { router } from "../main";
import { adminLogin } from "../utils/userAPI";

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
        const res = adminLogin(loginInfo.username, loginInfo.password);
        //console.log(res);
        res.then((data) => {console.log(data); data.success ? router.navigate('/home') : console.log(data.message)}).catch((err) => console.log(err));
        setLoginInfo({username: "", password: ""});
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value});
    }

    return (
        <ThemeProvider theme={themeControl()}>
        <Box className="gradient" sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", width:  "100vw"}}>
            <h1>Blog Editor</h1>
            <h2>Login</h2>
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