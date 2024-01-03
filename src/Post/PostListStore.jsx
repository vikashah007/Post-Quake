import { useEffect, useReducer,useState } from "react";
import { createContext } from "react";

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList=action.payload.posts
  }
  else if (action.type === "ADD_POST") {
    newPostList =[action.payload,...currPostList]
  }

  return newPostList;
};

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching:false,
  deletePost: () => {},
 
});

function PostListStore({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
      return ()=>{
        controller.abort();
      }
  }, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  return (
    <>
      <PostList.Provider value={{ postList, addPost,fetching, deletePost }}>
        {children}
      </PostList.Provider>
    </>
  );
}



export default PostListStore;
