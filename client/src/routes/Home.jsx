import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { getAllPublishedPosts, getRecentPublishedPost } from "../utils/postApi";

export default function Home(){
    const { recentPost } = useLoaderData();
    const { posts } = useLoaderData();

    return(
        <Box sx={{display: 'flex', flexDirection: "row", width: '100%', height: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '75%', height: '100%'}}>
                <Box>
                    Best of the week
                </Box>
                <Box>
                    Main card
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '25%', height: '100%'}}>
                <Box>
                    square card 1
                </Box>
                <Box>
                    square card 2
                </Box>
            </Box>
        </Box>
    )
}

export async function homeLoader () {
    const recentPost = await getRecentPublishedPost();
    const posts = await getAllPublishedPosts();
    return{recentPost, posts};
}