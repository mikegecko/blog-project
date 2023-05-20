import { useLoaderData } from "react-router-dom";
import { recentPost } from "../utils/postAPI";
import PostCard from "../components/PostCard";
import { Box } from "@mui/material";
export default function Home() {
  const { recentEditPost } = useLoaderData();

  return (
    <>
      <h1>Home</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <h4>Continue editing</h4>
          <PostCard post={recentEditPost} />
        </Box>
        <h4>Recently Published</h4>

        <h4>Recent Comments</h4>

        <h4>Site Stats</h4>
      </Box>
    </>
  );
}

export async function homeLoader() {
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
  };
}
