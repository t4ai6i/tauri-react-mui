import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
