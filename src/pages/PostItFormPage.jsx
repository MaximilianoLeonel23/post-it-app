import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePostIt } from "../contexts/postitContext";

const PostItFormPage = () => {
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState();
  const { createPostit } = usePostIt();
  const handleTags = () => {
    console.log(tagInput);
    setTags((prev) => [...prev, tagInput]);
  };

  const onSubmit = async (data) => {
    const newData = { ...data, tags: tags };

    try {
      const res = createPostit(newData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-16 flex gap-x-16 flex-row-reverse">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col gap-y-4  text-neutral-800"
      >
        <div className="flex flex-col gap-y-2">
          <label>Title</label>
          <input className="input-form" {...register("title")} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Content</label>
          <textarea className="input-form" {...register("content")} required />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Tags</label>
          <div className="flex items-center gap-x-2 ">
            <input
              className="input-form"
              values={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <span onClick={handleTags} className="cursor-pointer">
              Add tag
            </span>
          </div>
          <div className="flex gap-x-2">
            {tags && tags.map((tag, i) => <p key={i}>{tag}</p>)}
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
