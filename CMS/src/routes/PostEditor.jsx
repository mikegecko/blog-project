import { useEffect, useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useLoaderData, useLocation } from "react-router-dom";
import { getUser } from "../utils/userAPI";
import jwt_decode from "jwt-decode";
import { createPost, getPost, getPosts, updatePost } from "../utils/postAPI";
import { Editor } from "@tinymce/tinymce-react";
import PublishIcon from '@mui/icons-material/Publish';
import { router } from "../main";

export default function PostEditor() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2] || null;
  const [editorReady, setEditorReady] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
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
    if(postId){
      const now = Date.now();
      const post = {
        user: user._id,
        title: postTitle,
        content: editorRef.current.getContent(),
        name: user.name,
        edited: now,
        publishDate: now,
        likes: 0,
        comments: [],
        published: true,
      };
      updatePost(postId, post);
      // navigate to post / preview / posts page / add confirmation
  }
}
  const handleDelete = (e) => {
    // if post exists delete post
  };
  const handleSave = (e) => {
    // if post exists update post else create new post
    // log();
    if(postId){
      //post exists -> update
      const now = Date.now();
      const post = {
        user: user._id,
        title: postTitle,
        content: editorRef.current.getContent(),
        name: user.name,
        edited: now,
        likes: 0,
        comments: [],
      };
      updatePost(postId, post);
    }
    else{
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
    }
    
    return;
  };
  
  const handleCancel = (e) => {
    // if post exists cancel post
    router.navigate("/posts");
  };


  useEffect(() => {
    const fetchPost = async () => {
      // if post exists fetch post
      if(postId){
        //console.log(postId);
        const post = await getPost(postId);
        //console.log(post);
        return post;
      }
      else{
        console.log('No post provided');
        return;
      }
    }
    const loadPost = async (post) => {
      //console.log(post.content);
      setPostTitle(post.title);
      setPostContent(post.content);
      return;
    };
    const postLoader = async () => {
      const post = await fetchPost();
      if(post){
        loadPost(post);
      }
    }
    postLoader();
  }, []);

  const handleEditorChange = (content, editor) => {
    setPostContent(content);
  }

  const handleEditorInit = () => {
    setEditorReady(true);
  }


  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column"}}>
      <h1>Editor</h1>
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
            <PublishIcon sx={{ fontSize: "1.5rem", mr: 1 }} />
            Publish
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>

        <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onInit={(evt, editor) => {editorRef.current = editor; handleEditorInit()}}
        initialValue="<p>Enter your content here</p>"
        value={postContent}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
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
