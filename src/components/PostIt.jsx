import React from "react";
import FavouriteBtn from "./FavouriteBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

const PostIt = ({ post }) => {
  return (
    <article className="postit-shadow transition duration-700 hover:-rotate-3 w-[17rem]">
      <div className={`h-[2rem] bg-${post.color} brightness-90`}></div>
      <div className={`bg-${post.color} h-[15rem]`}>
        <div className="flex flex-col justify-between gap-y-2 h-full py-4 px-6">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-bold text-neutral-800 text-base line-clamp-1">
              {post?.title}
            </h4>
            <p className="font-base text-neutral-800 text-xs line-clamp-[9] wrap-balance">
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
