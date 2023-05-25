import { Box, Paper, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { getAllPublishedPosts, getRecentPublishedPost } from "../utils/postApi";
import FancyTitle from "../components/FancyTitle";

export default function Home() {
  const { recentPost } = useLoaderData();
  const { posts } = useLoaderData();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            height: "25%",
            padding: "2rem",
          }}
        >
          <Typography variant="h2" style={{ fontStyle: "italic" }}>
            Best of the week
          </Typography>
          <Link style={{ marginBottom: "10px" }} to={"posts"}>
            See all posts →
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "75%",
            justifyContent: "center",
            margin: "2rem 0rem 2rem 2rem",
          }}
        >
          <Paper sx={{ height: "100%", borderRadius: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: '100%'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%" }}>
                    <Paper elevation={2} sx={{}}>
                        postdate
                    </Paper>
                    </Box>
                <Box sx={{ width: "100%", justifySelf: "flex-start", padding: '1rem' }}>
                    <FancyTitle title={recentPost.title} />
                </Box>
              </Box>
              <Box>Actions</Box>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "25%",
          height: "100%",
        }}
      >
        <Box sx={{ height: "40%", margin: "2rem 2rem 0 2rem" }}>
          <Paper sx={{ height: "100%", borderRadius: "1rem" }}>
            square card 1
          </Paper>
        </Box>
        <Box sx={{ height: "40%", margin: "2rem" }}>
          <Paper sx={{ height: "100%", borderRadius: "1rem" }}>
            square card 2
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export async function homeLoader() {
  const recentPost = await getRecentPublishedPost();
  const posts = await getAllPublishedPosts();
  return { recentPost, posts };
}
