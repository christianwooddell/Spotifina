import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import Login from "./login";

// const mapStateToProps = state => ({
//     errors: state.errors.session
// });

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(null, mapDispatchToProps)(Login);