import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { usePostIt } from "../contexts/postitContext";
import { useNavigate } from "react-router-dom";
import add from "../assets/icons/add.svg";
import remove from "../assets/icons/remove.svg";
import Tag from "./../components/Tag";
import PostIt from "../components/PostIt";
const PostItFormPage = () => {
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState();
  const { createPostit } = usePostIt();
  const navigate = useNavigate();

  const addTag = () => {
    setTags((prev) => [...prev, tagInput]);
  };

  const removeTag = () => {
    if (tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  const onSubmit = async (data) => {
    const newData = { ...data, tags: tags };

    try {
      const res = await createPostit(newData);
      navigate("/postits");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-16 flex gap-x-16 flex-row-reverse">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col gap-y-4 py-4 text-neutral-800"
      >
        <h3 className="text-2xl text-neutral-800 font-semibold">New Post It</h3>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title">Title</label>
          <input id="title" className="input-form" {...register("title")} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="input-form"
            {...register("content")}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="tags">Tags</label>
          <div className="flex items-center gap-x-4">
            <input
              id="tags"
              className="input-form"
              values={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <span onClick={addTag} className="cursor-pointer">
              <img src={add} />
            </span>
            <span onClick={removeTag} className="cursor-pointer">
              <img src={remove} />
            </span>
          </div>
          <div className="flex gap-x-2">
            {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
          </div>
        </div>

        <div className="flex flex-col gap-y-2 ">
          <label>Colors</label>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <label>Neutral</label>
              <input
                type="radio"
                name="color"
                defaultValue="neutral"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label>Red</label>
              <input
                type="radio"
                name="color"
                defaultValue="red"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label>Green</label>
              <input
                type="radio"
                name="color"
                defaultValue="green"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label>blue</label>
              <input
                type="radio"
                name="color"
                defaultValue="blue"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label>Orange</label>
              <input
                type="radio"
                name="color"
                defaultValue="orange"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label>Yellow</label>
              <input
                type="radio"
                name="color"
                defaultValue="yellow"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label>Purple</label>
              <input
                type="radio"
                name="color"
                defaultValue="purple"
                {...register("color")}
              />
            </div>
          </div>
        </div>
        <button className="btn-solid">Add</button>
      </form>
      <div className="w-1/2 bg-white rounded drop-shadow-sm"></div>
    </div>
  );
};

export default PostItFormPage;
