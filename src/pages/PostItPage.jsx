import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";
import PostIt from "../components/PostIt";
import search from "../assets/icons/search.svg";
const PostItPage = () => {
  const { postits, getPostits } = usePostIt();

  const [filteredPostits, setFilteredPostits] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    getPostits();
    setFilteredPostits(postits);
  }, []);

  const filterByPost = (e) => {
    // Guardo el estado de mi input en "searched"
    const searchInput = e.target.value;
    setSearched(searchInput);

    // Realizo el filtro de postits del array original (filteredPostits está modificado)
    const filter = postits.filter((post) =>
      post.content.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Guardo los postits filtrados en "filteredPostits"
    setFilteredPostits(filter);
  };
  return (
    <>
      <div className="relative px-16 py-4 flex items-center">
        <img src={search} className="absolute ml-3" />
        <input
          placeholder="Search"
          className="px-10 py-1 border border-neutral-800 text-neutral-800 bg-transparent rounded"
          onChange={(e) => filterByPost(e)}
          value={searched}
        />
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
