import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";

export default function Home(){

    const posts = useLoaderData();

    return(
        <Box>
            Home
        </Box>
    )
}

export async function homeLoader () {
    
    return null;
}