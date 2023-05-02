import { Link, Outlet } from "react-router-dom";
import '../App.css';
import { Box } from "@mui/material";

export default function Root () {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Box className="Sidebar" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20vw'}}>
                <Link to={`home`}>Home</Link>
                <Link to={`settings`}>Settings</Link>
            </Box>
            <Box className="Main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60vw'}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export async function rootLoader () {
    return null;
}