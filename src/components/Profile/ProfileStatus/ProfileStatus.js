import React, { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatus = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
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
          autoFocus={true}
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
