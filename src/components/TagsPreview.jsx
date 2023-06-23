import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";
import Tag from "./Tag";

const TagsPreview = () => {
  const { postits } = usePostIt();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tags = postits.reduce((tagsSet, post) => {
      post.tags.forEach((tag) => tagsSet.add(tag));
      return tagsSet;
    }, new Set());

    const tagsArray = Array.from(tags);
    setTags(tagsArray);
  }, [postits]);

  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-base sm:text-lg font-medium text-neutral-800">
        Tags
      </h4>
      {tags.length < 1 ? (
        <div className="bg-neutral-100 rounded text-center py-2 sm:py-4 text-neutral-500">
          There is no tags now
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {tags &&
            tags.map((tag, i) => {
              return <Tag key={i} tag={tag} />;
            })}
        </div>
      )}
    </div>
  );
};

export default TagsPreview;
