import { PropTypes } from 'prop-types';
import { Box, ButtonBase, Paper, Typography } from "@mui/material";

export default function PostCard(props){

    const formattedCreateDate = new Date(props.post.created).toLocaleDateString();
    const formattedEditDate = new Date(props.post.edited).toLocaleDateString();
    return(
        <Box sx={{padding: 2}} >
            <ButtonBase sx={{width: '100%'}}>
            <Paper variant="outlined" elevation={2} sx={{padding: 2,  width: '100%'}}>
                <Typography variant="h6" gutterBottom>{props.post.title}</Typography>
                <Typography variant="subtitle" sx={{color: 'text.secondary'}} gutterBottom>Edited: {formattedEditDate}</Typography>
                <Typography variant="subtitle2" sx={{color: 'text.secondary'}} gutterBottom>Created: {formattedCreateDate}</Typography>
            </Paper>
            </ButtonBase>
        </Box>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
};