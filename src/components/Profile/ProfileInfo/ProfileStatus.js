import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={s.status}>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>
          {props.status || "____________"}
        </span>
      ) : (
        <input
          autoFocus
          onBlur={deactivateEditMode}
          type="text"
          value={status}
          onChange={onStatusChange}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
