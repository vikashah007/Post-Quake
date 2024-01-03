import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";

import { PostList as PostListData } from "../Post/PostListStore";
function PostList() {
  const { postList, fetching } = useContext(PostListData);

 

  

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
export default PostList;
