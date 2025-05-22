import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteDetail({ title, createdAt, body}) {
    return (
        <div>
            <h2>{title}</h2>
            <h5>{showFormattedDate(createdAt)}</h5>
            <p>{body}</p>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default NoteDetail;