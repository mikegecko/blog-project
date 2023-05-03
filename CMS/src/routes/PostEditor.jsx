import { Box, Button, TextField } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";
export default function PostEditor () {
    return(
    <Box>
        <h1>Post Editor</h1>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <TextField name="title" label="Post Title" placeholder="New Post" variant="outlined" fullWidth />
        <Box sx={{display: 'flex', justifyContent: 'center', gap: 2}}>
        <Button variant="contained">Publish</Button>
        <Button variant="contained">Delete</Button>
        </Box>
        
        <RichTextEditor />
        <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2}}>
            <Button variant="contained">Save</Button>
            <Button variant="contained">Cancel</Button>
        </Box>
        </Box>
    </Box>
    )
}

export async function postEditorLoader() {
    return null;
}