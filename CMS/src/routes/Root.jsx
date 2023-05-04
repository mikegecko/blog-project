import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from '../components/Themes';
import { useEffect } from 'react';

export default function Root () {
    const [colorMode, setColorMode] = useState('light');
    const [mobileView, setMobileView] = useState(false);
    const breakpoint = 768;

    const themeControl = () => {
        if(colorMode === 'light') {
            return(darkTheme);
        }
        if(colorMode === 'dark') {
            return(lightTheme);
        }
    }

    useEffect(() => {

    },[])

    return(
        <ThemeProvider theme={themeControl()}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <Box className="Sidebar" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '15vw', gap: '1rem'}}>
                <Link to={`home`}>Home</Link>
                <Link to={`posts`}>Posts</Link>
                <Link to={`edit`}>Editor</Link>
                <Link to={`settings`}>Settings</Link>
            </Box>
            <Box className="Main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '85vw'}}>
                <Outlet />
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export async function rootLoader () {
    return null;
}