import React, { useEffect } from "react";
import { usePostIt } from "../contexts/postitContext";
import PostIt from "../components/PostIt";
const PostItPage = () => {
  const { postits, getPostits } = usePostIt();

  useEffect(() => {
    getPostits();
    console.log(postits);
  }, []);

  return (
    <div className="px-16 grid grid-cols-4 gap-8">
      {postits &&
        postits.map((post, i) => {
          return <PostIt key={i} post={post} />;
        })}
    </div>
  );
};

export default PostItPage;
