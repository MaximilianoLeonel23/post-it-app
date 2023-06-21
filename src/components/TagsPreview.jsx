import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";

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
    console.log(tagsArray);
  }, [postits]);

  return (
    <div className="flex flex-wrap gap-x-2">
      {tags &&
        tags.map((tag, i) => {
          return (
            <p
              key={i}
              className="bg-neutral-100 text-neutral-500 text-sm rounded px-4 py-1"
            >
              {tag}
            </p>
          );
        })}
    </div>
  );
};

export default TagsPreview;
