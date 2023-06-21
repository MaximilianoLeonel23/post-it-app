import React from "react";
import TagsPreview from "../components/TagsPreview";
import FavouritePreview from "../components/FavouritePreview";
import Information from "../components/Information";
import ProfileImage from "../components/ProfileImage";
import Statistics from "../components/Statistics";
const ProfilePage = () => {
  return (
    <div className="px-16">
      <section className="grid grid-cols-2 gap-16 bg-white rounded-xl p-8">
        <div className="flex flex-col gap-y-8">
          <ProfileImage />
          <Statistics />
          <Information />
        </div>
        <div className="flex flex-col gap-y-8">
          <TagsPreview />
          <FavouritePreview />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
