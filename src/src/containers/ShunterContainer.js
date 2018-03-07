import {connect} from "react-redux";

import Shunter from "../components/Shunter";

const mapStateToProps = (state) => ({
    ...state
});

export default connect(
    mapStateToProps,
    null
)(Shunter);