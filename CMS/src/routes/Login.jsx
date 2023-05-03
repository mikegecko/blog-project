import { useState } from "react";
import { login } from "../utils/userAPI";
import { Box, TextField } from "@mui/material";

export default function Login() {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = login(loginInfo.username, loginInfo.password);
        res.then((data) => console.log(data)).catch((err) => console.log(err));
        setLoginInfo({username: "", password: ""});
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value});
    }

    return (
        <>
            <h1>Login</h1>
            <Box>
            <form onSubmit={handleSubmit}>
                <TextField type="text" label="Username" name="username" value={loginInfo.username} onChange={handleChange} />
                <TextField type="password" label="Password" name="password" value={loginInfo.password} onChange={handleChange} />
            </form>
            </Box>
        </>
    )
}

export async function loginLoader(){
    return null
}