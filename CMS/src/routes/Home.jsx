import { useLoaderData } from "react-router-dom";
import { recentPost } from "../utils/postAPI"
import PostCard from "../components/PostCard";
export default function Home () {

    const {recentEditPost} = useLoaderData();


    return(
        <>
            <h1>Home</h1>

            <h4>Continue editing</h4>
                <PostCard post={recentEditPost} />
            <h4>Recently Published</h4>

            <h4>Recent Comments</h4>

            <h4>Site Stats</h4>

        </>
    )
}

export async function homeLoader () {
    //Return the data we need -> access data using useLoaderData()
    //Get most recent edited post
    //Get most recent published post
    //Get most recent comments
    //Get total user count for comments / total comments

    const recentEditPost = await recentPost();
    // const recentPublishedPost = await
    // const recentComments = await
    // const userCount = await

    return {
        recentEditPost,
        // recentPublishedPost,
        // recentComments,
        // userCount
    }
}