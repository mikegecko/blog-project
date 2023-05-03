import { useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";
export default function PostEditor() {
  const [postTitle, setPostTitle] = useState("");
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  }

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
    // const post = {
    //   title: postTitle,
    //   content: editorRef.current.getContent(),
    // 
  };
  const handleCancel = (e) => {
    // if post exists cancel post
  };

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
          <Button variant="contained" onClick={handlePublish}>Publish</Button>
          <Button variant="contained" onClick={handleDelete}>Delete</Button>
        </Box>

        <RichTextEditor editorRef={editorRef} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="contained" onClick={handleSave}>Save</Button>
          <Button variant="contained" onClick={handleCancel}>Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}

export async function postEditorLoader() {
  return null;
}
