import axios from "axios";

export const getPublishedPost = async(postid) => {
    try{
        const response = await axios.get("");
        return response.data;
    }catch(error){
        console.error(error);
    }
}
export const getRecentPublishedPost = async() => {
    try{
        const response = await axios.get("/api/posts/recentpublished");
        return response.data;
    }catch(error){
        console.error(error);
    }
}
//TODO: write api endpoint functions
export const getAllPublishedPosts = async() => {
    try{
        const response = await axios.get("/api/posts/allpublished");
        return response.data;
    }catch(error){
        console.error(error);
    }
}