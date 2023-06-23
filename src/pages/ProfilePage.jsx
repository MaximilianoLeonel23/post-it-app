import React from "react";
import TagsPreview from "../components/TagsPreview";
import FavouritePreview from "../components/FavouritePreview";
import Information from "../components/Information";
import ProfileImage from "../components/ProfileImage";
import Statistics from "../components/Statistics";
const ProfilePage = () => {
  return (
    <div className="container">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 bg-white rounded-xl p-6 sm:p-8">
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
