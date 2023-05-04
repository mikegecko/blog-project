import { PropTypes } from 'prop-types';
import { Box } from "@mui/material";

export default function PostPreview(props) {

// Maybe make this into another route?

    return(
        <Box>
            <h2>{props.post.title}</h2>
            <div dangerouslySetInnerHTML={{__html: props.post.content}}></div>
        </Box>
        )
}

PostPreview.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
};