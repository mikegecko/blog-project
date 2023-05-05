import { useEffect, useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";
import { useLoaderData, useLocation } from "react-router-dom";
import { getUser } from "../utils/userAPI";
import jwt_decode from "jwt-decode";
import { createPost, getPost, getPosts } from "../utils/postAPI";

export default function PostEditor() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2] || null;
  const [postTitle, setPostTitle] = useState("");
  const editorRef = useRef(null);
  const [user, setUser] = useState(useLoaderData());
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePublish = (e) => {
    // if post exists publish post
  };
  const handleDelete = (e) => {
    // if post exists delete post
  };
  const handleSave = (e) => {
    // if post exists update post else create new post
    // log();
    console.log(editorRef.current.getContent());
    console.log(postTitle);
    const now = Date.now();
    const post = {
      user: user._id,
      title: postTitle,
      content: editorRef.current.getContent(),
      name: user.name,
      created: now,
      edited: now,
      publishDate: null,
      likes: 0,
      comments: [],
      published: false,
    };

    createPost(post);
    return;
  };
  
  const handleCancel = (e) => {
    // if post exists cancel post
  };

  const fetchPost = async () => {
    // if post exists fetch post
    if(postId){
      console.log(postId);
      const post = await getPost(postId);
      console.log(post);
    }
    else{
      console.log('No post provided');
    }
  }

  useEffect(() => {
      fetchPost();
  }, []);

  return (
    <Box>
      <h1>Post Editor</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="title"
          label="Post Title"
          placeholder="New Post"
          variant="outlined"
          onChange={handleTitleChange}
          value={postTitle}
          fullWidth
        />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" onClick={handlePublish}>
            Publish
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>

        <RichTextEditor editorRef={editorRef} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export async function postEditorLoader() {
  const token = localStorage.getItem("blog-token");
  const decoded = jwt_decode(token);
  const user = await getUser(decoded.id, token);
  return(user);
}
