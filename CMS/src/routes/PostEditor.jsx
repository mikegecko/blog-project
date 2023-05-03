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
          <Button variant="contained">Publish</Button>
          <Button variant="contained">Delete</Button>
        </Box>

        <RichTextEditor editorRef={editorRef} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="contained">Save</Button>
          <Button variant="contained">Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}

export async function postEditorLoader() {
  return null;
}
