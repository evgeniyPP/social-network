import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { withNoAuthRedirect } from "../hoc/withNoAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2856;
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
  status: state.profilePage.status
});

export default compose(
  connect(
    mapStateToProps,
    { getProfile, getStatus, updateStatus }
  ),
  withNoAuthRedirect,
  withRouter
)(ProfileContainer);
