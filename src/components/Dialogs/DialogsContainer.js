import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withNoAuthRedirect } from "../hoc/withNoAuthRedirect";
import { compose } from "redux";
import { selectUsersDB } from "../../utils/selectors";

const mapStateToProps = state => ({
  users: selectUsersDB(state)
});

export default compose(
  connect(mapStateToProps),
  withNoAuthRedirect
)(Dialogs);
