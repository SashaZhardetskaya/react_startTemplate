import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div
            className="content-wrapper"
            id="content-container"
        >
            <h1>
                404 <br/>
                This Page Is Not Found
            </h1>
            <h2>
                Please, go to the
                <Link to="/dashboard">
                    {' main page'}
                </Link>.
            </h2>
        </div>
    )
}

export default NotFound