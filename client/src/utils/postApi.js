import axios from "axios";

export const recentPublishedPost = async() => {
    try{
        const response = await axios.get("/api/posts/recentpublished");
        return response.data;
    }catch(error){
        console.error(error);
    }
}

export const allPublishedPost = async() => {
    try{
        const response = await axios.get("/api/posts/allpublished");
        return response.data;
    }catch(error){
        console.error(error);
    }
}