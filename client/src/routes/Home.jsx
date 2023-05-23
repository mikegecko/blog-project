import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { getAllPublishedPosts, getRecentPublishedPost } from "../utils/postApi";

export default function Home(){
    const { recentPost } = useLoaderData();
    const { posts } = useLoaderData();

    return(
        <Box>
            Home
            <Box>
                {recentPost.title}
            </Box>
        </Box>
    )
}

export async function homeLoader () {
    const recentPost = await getRecentPublishedPost();
    const posts = await getAllPublishedPosts();
    return{recentPost, posts};
}