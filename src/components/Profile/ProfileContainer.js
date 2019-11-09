import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId =
      this.props.match.params.userId ||
      this.props.myUserId ||
      this.props.history.push("/login");
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  myUserId: state.auth.id
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getProfile, getStatus, updateStatus }
  )
)(ProfileContainer);
