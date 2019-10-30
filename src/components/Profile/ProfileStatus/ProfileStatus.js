import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  };

  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        ) : (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            type="text"
            value={this.props.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
