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
  const [loading, setLoading] = useState(true);

  const getPostits = async () => {
    try {
      const res = await getPostitsRequest();
      setPostits(res.data);
      setLoading(false);
    } catch (erorr) {
      console.log(error);
      setLoading(false);
    }
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

  const updatePostit = async (id, postit) => {
    try {
      await updatePostitRequest(id, postit);
    } catch (error) {
      console.log(error);
    }
  };

  const createPostit = async (postit) => {
    try {
      const res = await createPostitRequest(postit);
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
        loading,
      }}
    >
      {children}
    </PostItContext.Provider>
  );
};
