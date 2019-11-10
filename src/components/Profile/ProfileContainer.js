import React, { useEffect } from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { compose } from "redux";
import {
  selectProfile,
  selectStatus,
  selectIsAuth,
  selectId
} from "../../utils/selectors";

const ProfileContainer = props => {
  useEffect(() => {
    let userId =
      props.match.params.userId ||
      props.myUserId ||
      props.history.push("/login");
    props.getProfile(userId);
    props.getStatus(userId);
  }, [props]);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

const mapStateToProps = state => ({
  profile: selectProfile(state),
  status: selectStatus(state),
  isAuth: selectIsAuth(state),
  myUserId: selectId(state)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getProfile, getStatus, updateStatus }
  )
)(ProfileContainer);
