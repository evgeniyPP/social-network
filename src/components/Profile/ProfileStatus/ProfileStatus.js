import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = e => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || "____________"}
          </span>
        ) : (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            type="text"
            value={this.state.status}
            onChange={this.onStatusChange}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
