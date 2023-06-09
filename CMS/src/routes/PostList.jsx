import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getPosts } from "../utils/postAPI";
import { Box, Button, Grid, Paper } from "@mui/material";
import PostCard from "../components/PostCard";
import DeleteModal from "../components/DeleteModal";
import { deletePost } from "../utils/postAPI";
import { router } from "../main"

export default function PostList() {

    const [posts, setPosts] = useState(useLoaderData());
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handleClose = () => {
        setDeleteModalOpen(false);
    }
    const handleDelete = async() => {
        setDeleteModalOpen(false);
        console.log(selectedPost);
        if(selectedPost) {
            await deletePost(selectedPost);
            const posts = await getPosts();
            setPosts(posts);
        }
    }
    const onDeletePost = (postid) => {
        setSelectedPost(postid);
        setDeleteModalOpen(true);
    };
    
    return(
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", flexGrow: 1, overflow: 'auto'}}>
            <h1>Posts</h1>
            <Grid sx={{padding: '1rem 3rem 1rem 1rem'}} container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
                <Grid key={'create'} item xs={2} sm={4} md={4} lg={4} xl={4}>
                    <Box sx={{padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Paper variant="outlined" elevation={0} sx={{padding: 2,  width: '100%'}}>
                            <Button variant="contained" onClick={() => router.navigate('/edit')}>Create new post</Button>
                        </Paper>
                    </Box>
                </Grid>
            {posts ? posts.map(post => {
                return(
                    <Grid key={post.id} item xs={2} sm={4} md={4} lg={4} xl={4} >
                        <PostCard key={post.id} onDeletePost={onDeletePost} post={post} />
                    </Grid>
                )
            }) : 'No posts'}
            </Grid>
            <DeleteModal open={deleteModalOpen} onClose={handleClose} onDelete={handleDelete} />
        </Box>
    )
}

export async function postLoader() {
    //GET all posts
    const posts = await getPosts();
    return(posts);
}