import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from '../components/Themes';
import { useEffect } from 'react';

export default function Root () {
    const [colorMode, setColorMode] = useState('dark');
    const [mobileView, setMobileView] = useState(false);
    const breakpoint = 768;

    const handleColorMode = (e, newColorMode) => {
        if(newColorMode !== null){
            if(colorMode === newColorMode){
                return;
            }
            setColorMode(newColorMode);
        }
    }

    const themeControl = () => {
        if(colorMode === 'dark') {
            return(darkTheme);
        }
        if(colorMode === 'light') {
            return(lightTheme);
        }
        else{
            return(darkTheme);
        }
    }

    useEffect(() => {

    },[])

    return(
        <ThemeProvider theme={themeControl()}>
        <Box className="" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <Box className="Sidebar gradient" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '15vw', gap: '1rem', height: '100vh'}}>
                <Link to={`home`}>Home</Link>
                <Link to={`posts`}>Posts</Link>
                <Link to={`edit`}>Editor</Link>
                <Link to={`settings`}>Settings</Link>
                <Box>
                    <ToggleButtonGroup value={colorMode} exclusive onChange={handleColorMode}>
                        <ToggleButton value="light">
                            Light
                        </ToggleButton>
                        <ToggleButton value="dark">
                            Dark
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
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