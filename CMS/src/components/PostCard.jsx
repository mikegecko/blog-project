import { PropTypes } from 'prop-types';
import { Box, ButtonBase, Paper, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { router } from "../main";



export default function PostCard(props){
    const post = props.post;
    const formattedCreateDate = new Date(props.post.created).toLocaleDateString();
    const formattedEditDate = new Date(props.post.edited).toLocaleDateString();

    const handlePostClick = (e) => {
        e.stopPropagation();
        console.log(`Post clicked. Id: ${post._id}`);
    }
    const handlePostEditClick = (e) => {
        e.stopPropagation();
        router.navigate(`/edit/${post._id}`);
    };
    const handlePostDeleteClick = (e) => {
        e.stopPropagation();
        console.log('Delete clicked');
        props.onDeletePost(post._id);
    }
    const handlePostViewClick = (e) => {
        e.stopPropagation();
        console.log('View clicked');
    }

    return(
        <Box sx={{padding: 2}} >
            <ButtonBase onClick={handlePostClick} sx={{width: '100%'}}>
            <Paper variant="outlined" elevation={0} sx={{padding: 2,  width: '100%'}}>
                <Typography variant="h6" gutterBottom>{post.title}</Typography>
                <Typography variant="subtitle" sx={{color: 'text.secondary'}} gutterBottom>Edited: {formattedEditDate}</Typography>
                <Typography variant="subtitle2" sx={{color: 'text.secondary'}} gutterBottom>Created: {formattedCreateDate}</Typography>
                <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: '.5rem'}}>
                    <ButtonBase onClick={handlePostEditClick}><EditIcon /></ButtonBase>
                    <ButtonBase onClick={handlePostDeleteClick}><DeleteIcon /></ButtonBase>
                </Box>
            </Paper>
            </ButtonBase>
        </Box>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
        edited: PropTypes.string.isRequired,
        
    }),
    onDeletePost: PropTypes.func.isRequired,
};