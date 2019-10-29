import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  users: state.dialogsPage.usersDB,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Dialogs);
