import { useContext, createContext, useState } from "react";

import {
  getPostitRequest,
  getPostitsRequest,
  updatePostitRequest,
  deletePostitRequest,
  createPostitRequest,
} from "../helpers/postits";

export const PostItContext = createContext();

export const usePostIt = () => {
  const context = useContext(PostItContext);

  if (!context)
    throw new Error("usePostIt must be used within an PostItProvider");
  return context;
};

export const PostItProvider = ({ children }) => {
  const [postits, setPostits] = useState([]);

  const getPostits = async () => {
    const res = await getPostitsRequest();
    setPostits(res.data);
  };

  const deletePostit = async (id) => {
    try {
      const res = deletePostitRequest(id);
      if (res.status === 204)
        setPostits(postits.filter((postit) => postit._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updatePostit = async (postit) => {
    try {
      await updatePostitRequest(postit);
    } catch (error) {
      console.log(error);
    }
  };

  const createPostit = async (postit) => {
    try {
      const res = await createPostitRequest(postit);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostit = async (id) => {
    try {
      const res = await getPostitRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostItContext.Provider
      value={{
        postits,
        getPostits,
        deletePostit,
        updatePostit,
        createPostit,
        getPostit,
      }}
    >
      {children}
    </PostItContext.Provider>
  );
};
