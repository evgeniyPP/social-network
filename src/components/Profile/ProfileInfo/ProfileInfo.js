import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../images/avatar.jpg";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  const { photos, fullName, aboutMe, contacts } = profile;

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
        <img className={s.userPhoto} src={photos.large || avatar} alt="" />
        <div className={s.mainInfo}>
          <p className={s.fullName}>{fullName}</p>
          <p className={s.aboutMe}>{aboutMe}</p>
          <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
        <div className={s.contacts}>
          <p className={s.facebook}>{contacts.facebook}</p>
          <p className={s.website}>{contacts.website}</p>
          <p className={s.vk}>{contacts.vk}</p>
          <p className={s.twitter}>{contacts.twitter}</p>
          <p className={s.instagram}>{contacts.instagram}</p>
          <p className={s.youtube}>{contacts.youtube}</p>
          <p className={s.github}>{contacts.github}</p>
          <p className={s.mainLink}>{contacts.mainLink}</p>
        </div>
        <p className={s.fullName}></p>
      </div>
    </div>
  );
};

export default ProfileInfo;
