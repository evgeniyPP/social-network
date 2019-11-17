import React, { useState } from "react";
import Preloader from "../../../utils/common/Preloader";
import ProfileMainInfo from "./ProfileMainInfo";
import ProfileEditForm from "./ProfileEditForm";
import css from "../../../css/Profile/Profile.module.css";
import avatar from "../../../assets/images/avatar.jpg";

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
    saveProfileData(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={css.profileInfo}>
      <img
        className={css.bigImage}
        src="https://picsum.photos/id/993/1000/150"
        alt="main"
      />
      <div className={css.information}>
        <div className={css.avatar}>
          <img
            className={css.userPhoto}
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
          <ProfileEditForm initialValues={profile} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
