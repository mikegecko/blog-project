import { Link, Outlet } from "react-router-dom";
import '../App.css';
import { Box } from "@mui/material";
import { useState } from "react";

export default function Root () {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Box className="Sidebar" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20vw', gap: '1rem'}}>
                <Link to={`home`}>Home</Link>
                <Link to={`posts`}>Posts</Link>
                <Link to={`edit`}>Editor</Link>
                <Link to={`settings`}>Settings</Link>
            </Box>
            <Box className="Main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vw'}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export async function rootLoader () {
    return null;
}