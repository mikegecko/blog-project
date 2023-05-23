import { Box, InputBase, ThemeProvider } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { darkTheme } from "../components/Themes";

export default function Root() {

    return(
        <ThemeProvider theme={darkTheme}>
        <Box sx={{dislay: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
            <Box  sx={{height: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', pl: '1rem', alignItems: 'center' }} className="navbar-left">
                    <h4>Blog Untitled</h4>
                    <Link to={``}>Home</Link>
                    <Link to={`posts`}>Articles</Link>
                    <Link to={`about`}>About us</Link>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', pr: '1rem', alignItems: 'center' }} className="navbar-right">
                    <InputBase />
                    <Link to={`login`}>Login</Link>
                    <Link to={`signup`}>Signup</Link>
                </Box>
            </Box>
            <Box sx={{height: '90%'}}>
                <Outlet />
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export async function rootLoader () {
    return null;
}