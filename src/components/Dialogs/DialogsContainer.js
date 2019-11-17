import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNoAuthRedirect } from "../../utils/hoc/withNoAuthRedirect";
import { selectUsersDB } from "../../utils/selectors";

const mapStateToProps = state => ({
  users: selectUsersDB(state)
});

export default compose(connect(mapStateToProps), withNoAuthRedirect)(Dialogs);
