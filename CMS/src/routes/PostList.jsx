import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getPosts } from "../utils/postAPI";
import { Box, Grid } from "@mui/material";
import PostCard from "../components/PostCard";

export default function PostList() {

    const [posts, setPosts] = useState(useLoaderData());



    useEffect(() => {

    }, [])

    return(
        <Box>
            <h1>Posts</h1>
            <Grid>
            {posts ? posts.map(post => {
                return(
                    <Box key={post.id}>
                        <PostCard post={post} />
                    </Box>
                )
            }) : 'No posts'}
            </Grid>
        </Box>
    )
}

export async function postLoader() {
    //GET all posts
    const posts = await getPosts();
    return(posts);
}