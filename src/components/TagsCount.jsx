import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";

const TagsCount = () => {
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
    <p>
      <span className="font-extrabold text-2xl pr-2">
        {tags ? tags.length : 0}
      </span>
      Tags
    </p>
  );
};

export default TagsCount;
