import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Post/PostListStore";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card postCard" style={{ width: "30rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tags) => (
            <span key={tags} className="badge text-bg-primary hashTag ">
              {tags}
            </span>)
          )}
          <div className="alert alert-success reactions" role="alert">
            This Post is reacted by {post.reactions} Users.
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
