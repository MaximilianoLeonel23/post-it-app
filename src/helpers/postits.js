import axios from "./axios";

export const getPostitsRequest = async () => axios.get("/postits");

export const createPostitRequest = async (postit) =>
  axios.post("/postits", postit);

export const updatePostitRequest = async (id, postit) =>
  axios.put(`/postits/${id}`, postit);

export const deletePostitRequest = async (id) => axios.delete(`/postits/${id}`);

export const getPostitRequest = async (id) => axios.get(`/postits/${id}`);
