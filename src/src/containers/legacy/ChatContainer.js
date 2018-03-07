import {connect} from "react-redux";
import Chat from "../../components/legacy/Chat";

const mapStateToProps = (state) => ({
    ...state.auth
});

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default connect(
    mapStateToProps,
    null
)(Chat);