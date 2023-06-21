import React from "react";
import FavouriteBtn from "./FavouriteBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

const PostIt = ({ post }) => {
  return (
    <article className="postit-shadow transition duration-700 hover:-rotate-3">
      <div className={`h-6 bg-${post.color} brightness-90`}></div>
      <div className={`bg-${post.color} h-60 `}>
        <div className="flex flex-col justify-between gap-y-2 h-full p-4">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-bold text-neutral-800 text-lg line-clamp-1">
              {post?.title}
            </h4>
            <p className="font-base text-neutral-800 text-sm line-clamp-6 wrap-balance">
              {post?.content}
            </p>
          </div>
          <div className="flex items-center gap-x-4 text-sm text-neutral-800">
            <FavouriteBtn post={post} />
            <EditBtn post={post} />
            <DeleteBtn post={post} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostIt;
