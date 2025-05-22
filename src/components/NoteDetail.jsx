import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./NoteDeleteButton";
import { showFormattedDate } from "../utils";

function NoteDetail({ id, title, createdAt, body, onDelete}) {
    return (
        <div className="note-detail">
            <h2>{title}</h2>
            <h5>{showFormattedDate(createdAt)}</h5>
            <p>{body}</p>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default NoteDetail;