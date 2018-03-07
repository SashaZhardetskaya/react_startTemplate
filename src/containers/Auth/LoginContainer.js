import {connect} from "react-redux";

import * as AuthActions from "../../store/actions/authActions";
import Login from "../../components/Auth/Login";

const mapStateToProps = (state) => ({
    ...state.auth
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => {
        dispatch(AuthActions.loginUser(username, password));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);