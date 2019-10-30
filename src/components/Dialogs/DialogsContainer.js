import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withNoAuthRedirect } from "../hoc/withNoAuthRedirect";

const mapStateToProps = state => ({
  users: state.dialogsPage.usersDB
});

export default connect(mapStateToProps)(withNoAuthRedirect(Dialogs));
