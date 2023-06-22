import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostIt } from "../contexts/postitContext";
import add from "../assets/icons/add.svg";
import remove from "../assets/icons/remove.svg";
import Tag from "../components/Tag";
import editPostitImage from "../assets/images/edit-postit.jpg";
const EditFormPage = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const { getPostit, updatePostit } = usePostIt();
  const params = useParams();
  const navigate = useNavigate();

  const addTag = () => {
    setTags((prev) => [...prev, tagInput]);
    setTagInput("");
  };

  const removeTag = () => {
    if (tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  const onSubmit = async (data) => {
    const updatedData = { ...data, tags: tags };
    try {
      if (params.id) {
        const updatedPostit = await updatePostit(params.id, updatedData);
        navigate("/postits");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadPostit = async () => {
      if (params.id) {
        const postit = await getPostit(params.id);
        setValue("title", postit.title);
        setValue("content", postit.content);
        setValue("color", postit.color);
        setTags(postit.tags);
      }
    };
    loadPostit();
  }, []);
  return (
    <div className="px-16 flex gap-x-16 flex-row-reverse">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col gap-y-4 py-4 text-neutral-800"
      >
        <h3 className="text-2xl text-neutral-800 font-semibold">
          Edit Post It
        </h3>
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
          <div className="flex items-center gap-x-4 ">
            <input
              className="input-form"
              value={tagInput}
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
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex  items-center gap-x-2 bg-primary-neutral px-3 py-1 cursor-pointer">
              <label htmlFor="neutral">Neutral</label>
              <input
                id="neutral"
                type="radio"
                name="color"
                value="neutral"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2 bg-primary-red px-3 py-1 cursor-pointer">
              <label htmlFor="red">Red</label>
              <input
                id="red"
                type="radio"
                name="color"
                value="red"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2 bg-primary-green px-3 py-1 cursor-pointer">
              <label htmlFor="green">Green</label>
              <input
                id="green"
                type="radio"
                name="color"
                value="green"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2 bg-primary-blue px-3 py-1 cursor-pointer">
              <label htmlFor="blue">blue</label>
              <input
                id="blue"
                type="radio"
                name="color"
                value="blue"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2 bg-primary-orange px-3 py-1 cursor-pointer">
              <label htmlFor="orange">Orange</label>
              <input
                id="orange"
                type="radio"
                name="color"
                value="orange"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2 bg-primary-yellow px-3 py-1 cursor-pointer">
              <label htmlFor="yellow">Yellow</label>
              <input
                id="yellow"
                type="radio"
                name="color"
                value="yellow"
                {...register("color")}
              />
            </div>
            <div className="flex items-center gap-x-2 bg-primary-purple px-3 py-1 cursor-pointer">
              <label htmlFor="purple">Purple</label>
              <input
                id="purple"
                type="radio"
                name="color"
                value="purple"
                {...register("color")}
              />
            </div>
          </div>
        </div>
        <button className="btn-solid">Save</button>
      </form>
      <div className="w-1/2 h-[30rem]">
        <img
          src={editPostitImage}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default EditFormPage;
