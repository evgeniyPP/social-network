import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { selectIsAuth, selectLogin } from "../../utils/selectors";

const mapStateToProps = state => ({
  isAuth: selectIsAuth(state),
  login: selectLogin(state)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { logout }
  )
)(Header);
