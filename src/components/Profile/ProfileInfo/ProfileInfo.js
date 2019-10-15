import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../images/avatar.jpg";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <div>
        <img
          className={s.bigImage}
          src="https://picsum.photos/id/993/1000/150"
          alt="main"
        />
      </div>
      <div className={s.information}>
        <img
          className={s.userPhoto}
          src={props.profile.photos.large || avatar}
          alt=""
        />
        <div className={s.mainInfo}>
          <p className={s.fullName}>{props.profile.fullName}</p>
          <p className={s.aboutMe}>{props.profile.aboutMe}</p>
        </div>
        <div className={s.contacts}>
          <p className={s.facebook}>{props.profile.contacts.facebook}</p>
          <p className={s.website}>{props.profile.contacts.website}</p>
          <p className={s.vk}>{props.profile.contacts.vk}</p>
          <p className={s.twitter}>{props.profile.contacts.twitter}</p>
          <p className={s.instagram}>{props.profile.contacts.instagram}</p>
          <p className={s.youtube}>{props.profile.contacts.youtube}</p>
          <p className={s.github}>{props.profile.contacts.github}</p>
          <p className={s.mainLink}>{props.profile.contacts.mainLink}</p>
        </div>
        <p className={s.fullName}></p>
      </div>
    </div>
  );
};

export default ProfileInfo;
