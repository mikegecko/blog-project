import axios from "axios";


export const createPost = async(post) => {
    try {
        const response = await axios.post("/api/posts/new", {
            ...post
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

export const getPosts = async() => {
    try {
        const response = await axios.get("/api/posts");
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

export const getPost = async(postid) => {
    try {
        const response = await axios.get(`/api/posts/${postid}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updatePost = async(postid, post) => {
    try {
        const response = await axios.put(`/api/posts/${postid}`, {
            ...post,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deletePost = async(postid) => {
    try{
        const response = await axios.delete(`/api/posts/${postid}`)
        return response.data;
    } catch(error){
        console.error(error)
    }
};
