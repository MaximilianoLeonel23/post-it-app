import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";
import PostIt from "../components/PostIt";
import search from "../assets/icons/search.svg";
import tagIcon from "../assets/icons/tag.svg";
const PostItPage = () => {
  const { postits, getPostits } = usePostIt();
  const [tags, setTags] = useState([]);
  const [filteredPostits, setFilteredPostits] = useState([]);
  const [searched, setSearched] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    getPostits();
    setFilteredPostits(postits);
    const tags = postits.reduce((tagsSet, post) => {
      post.tags.forEach((tag) => tagsSet.add(tag.toLowerCase()));
      return tagsSet;
    }, new Set());

    const tagsArray = Array.from(tags);
    setTags(tagsArray);
  }, []);

  const filterByPost = (e) => {
    // Guardo el estado de mi input en "searched"
    const searchInput = e.target.value;
    setSearched(searchInput);

    // Realizo el filtro de postits del array original (filteredPostits está modificado)
    const filter = postits.filter((post) => {
      const hasSearchInput = post.content
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const hasSelectedTag =
        selectedTag === "all" || post.tags.includes(selectedTag);
      return hasSearchInput && hasSelectedTag;
    });
    // Guardo los postits filtrados en "filteredPostits"
    setFilteredPostits(filter);
  };

  const filterByTag = (e) => {
    // Guardo el estado de mi select
    const tagInput = e.target.value;
    setSelectedTag(tagInput);

    if (tagInput === "all") {
      setFilteredPostits(postits);
    } else {
      const filter = postits.filter((post) => post.tags.includes(tagInput));
      setFilteredPostits(filter);
    }
  };
  return (
    <>
      <div className="px-16 py-4 flex items-center gap-x-4">
        <div className="relative flex items-center">
          <img src={search} className="absolute ml-3" />
          <input
            placeholder="Search"
            className="pl-10 py-1 border border-neutral-800 text-neutral-800 bg-transparent rounded"
            onChange={(e) => filterByPost(e)}
            value={searched}
          />
        </div>
        <div className="relative flex items-center">
          <img src={tagIcon} className="absolute ml-3" />
          <select
            value={selectedTag}
            onChange={(e) => filterByTag(e)}
            className="pl-10 py-1 border border-neutral-800 bg-neutral-800 text-white bg-transparent rounded"
          >
            <option value="all">all tags</option>
            {tags.map((tag, i) => {
              return (
                <option key={i} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {postits &&
          filteredPostits.map((post, i) => {
            return <PostIt key={i} post={post} />;
          })}
      </div>
    </>
  );
};

export default PostItPage;
