import React from "react";

const PostIt = ({ post }) => {
  return (
    <article
      className={`bg-${post.color} h-60 postit-shadow transition duration-700 hover:-rotate-3`}
    >
      <div className={`h-6 bg-${post.color} brightness-90`}></div>
      <div className="flex flex-col p-4 gap-y-2 ">
        <h4 className="font-bold text-neutral-800 text-lg">{post?.title}</h4>
        <p className="font-base text-neutral-800 text-sm">{post?.content}</p>
      </div>
    </article>
  );
};

export default PostIt;
