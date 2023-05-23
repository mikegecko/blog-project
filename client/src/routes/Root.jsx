import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { darkTheme } from "../components/Themes";

export default function Root() {

    return(
        <ThemeProvider theme={darkTheme}>
        <Box>
            Root
            <Box>
                <Outlet />
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export async function rootLoader () {
    return null;
}