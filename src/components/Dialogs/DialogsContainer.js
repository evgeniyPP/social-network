import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withNoAuthRedirect } from "../hoc/withNoAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => ({
  users: state.dialogsPage.usersDB
});

export default compose(
  connect(mapStateToProps),
  withNoAuthRedirect
)(Dialogs);
