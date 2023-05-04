import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getPosts } from "../utils/postAPI";
import { Box } from "@mui/material";

export default function PostList() {

    const [posts, setPosts] = useState(useLoaderData());



    useEffect(() => {

    }, [])

    return(
        <>
            <h1>Posts</h1>
            <h4>List all posts</h4>
            {posts ? posts.map(post => {
                return(
                    <Box key={post.id}>
                        <h2>{post.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                    </Box>
                )
            }) : 'No posts'}
        </>
    )
}

export async function postLoader() {
    //GET all posts
    const posts = await getPosts();
    return(posts);
}