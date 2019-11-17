import React from "react";
import ProfileStatus from "./ProfileStatus";
import css from "./ProfileInfo.module.css";

export default ({ profile, status, updateStatus, isOwner, editModeOn }) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription
  } = profile;

  return (
    <div className={css.mainInfo}>
      <div className={css.description}>
        <p className={css.fullName}>{fullName}</p>
        <p className={css.aboutMe}>{aboutMe}</p>
        <p className={css.lookingForAJob}>
          {lookingForAJob ? "Я ищу работу: " : "Я не ищу работу"}
          <span>{lookingForAJob ? lookingForAJobDescription : ""}</span>
        </p>
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
      <div className={css.contacts}>
        <p className={css.facebook}>{contacts.facebook}</p>
        <p className={css.website}>{contacts.website}</p>
        <p className={css.vk}>{contacts.vk}</p>
        <p className={css.twitter}>{contacts.twitter}</p>
        <p className={css.instagram}>{contacts.instagram}</p>
        <p className={css.youtube}>{contacts.youtube}</p>
        <p className={css.github}>{contacts.github}</p>
        <p className={css.mainLink}>{contacts.mainLink}</p>

        {isOwner ? <button onClick={editModeOn} >Редактировать</button> : ""}
      </div>
    </div>
  );
};
