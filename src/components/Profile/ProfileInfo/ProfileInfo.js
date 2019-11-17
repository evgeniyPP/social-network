import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileMainInfo from "./ProfileMainInfo";
import ProfileEditForm from "./ProfileEditForm";
import s from "./ProfileInfo.module.css";
import avatar from "../../../images/avatar.jpg";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfileData
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onAddPhoto = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    if (!formData.lookingForAJobDescription) {
      formData.lookingForAJobDescription = "-";
    }
    saveProfileData(formData);
    setEditMode(false);
  };

  return (
    <div className={s.profileInfo}>
      <img
        className={s.bigImage}
        src="https://picsum.photos/id/993/1000/150"
        alt="main"
      />
      <div className={s.information}>
        <div className={s.avatar}>
          <img
            className={s.userPhoto}
            src={profile.photos.large || avatar}
            alt=""
          />
          {isOwner ? <input type="file" onChange={onAddPhoto} /> : ""}
        </div>
        {!editMode ? (
          <ProfileMainInfo
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            isOwner={isOwner}
            editModeOn={() => {
              setEditMode(true);
            }}
          />
        ) : (
          <ProfileEditForm onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
