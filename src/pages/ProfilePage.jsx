import React from "react";
import hi from "../assets/icons/hi.svg";
import { useAuth } from "../contexts/authContext";
import Total from "../components/Total";
import Favourites from "../components/Favourites";
import TagsPreview from "../components/TagsPreview";
import TagsCount from "../components/TagsCount";
const ProfilePage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="px-16">
      <section className="grid grid-cols-2 gap-16 bg-white rounded-xl p-8">
        <div className="flex flex-col gap-y-16">
          <div id="Header nombre" className="flex items-center gap-x-4">
            <div className="flex items-center justify-center h-24 w-24 bg-primary-yellow text-5xl text-neutral-800">
              {user?.fullname.slice(0, 1)}
            </div>
            <div className="text-neutral-800">
              <p className="flex items-center gap-x-1">
                Hi!
                <img src={hi} />
              </p>
              <h3 className="font-semibold text-4xl">{user?.fullname}</h3>
            </div>
          </div>
          <div
            id="Stadisticas"
            className="flex items-center gap-x-16 text-neutral-800"
          >
            <Total />

            <Favourites />
            <TagsCount />
          </div>
          <div id="personalinfo" className="flex flex-col gap-y-8">
            <h4>Personal information</h4>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-neutral-500">Full Name</p>
                <p className="text-neutral-800">{user?.fullname}</p>
              </div>
              <div>
                <p className="text-neutral-500">Email</p>
                <p className="text-neutral-800">{user?.email}</p>
              </div>
              <div>
                <p className="text-neutral-500">Username</p>
                <p className="text-neutral-800">{user?.username}</p>
              </div>
              <div>
                <p className="text-neutral-500">Password</p>
                <p className="text-neutral-800">*********</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-8">
            <h4>Tags</h4>
            <TagsPreview />
          </div>
          <div id="favourites" className="flex flex-col gap-y-8">
            <h4 className="font-medium text-neutral-800">Favourites</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
