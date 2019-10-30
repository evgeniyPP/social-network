import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import PostsContainer from "./Posts/PostsContainer";

const Profile = props => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <ProfileStatus status={'hello world'} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
