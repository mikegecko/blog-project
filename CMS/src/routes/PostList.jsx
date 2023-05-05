import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getPosts } from "../utils/postAPI";
import { Box, Grid } from "@mui/material";
import PostCard from "../components/PostCard";
import { router } from "../main";

export default function PostList() {

    const [posts, setPosts] = useState(useLoaderData());

    const onEditPost = (postid) => {
        router.navigate(`/edit/${postid}`);
    }

    useEffect(() => {

    }, [])
    
    return(
        <Box sx={{flexGrow: 1}}>
            <h1>Posts</h1>
            <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
            {posts ? posts.map(post => {
                return(
                    <Grid key={post.id} item xs={2} sm={4} md={4} lg={4} xl={4} >
                        <PostCard onEditPost={onEditPost}  post={post} />
                    </Grid>
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