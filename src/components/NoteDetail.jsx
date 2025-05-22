import React from "react";
import PropTypes from "prop-types";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils";

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive}) {
    return (
        <div className="note-detail">
            <h2>{title}</h2>
            <h5>{showFormattedDate(createdAt)}</h5>
            <p>{body}</p>
            <NoteItemAction 
            id={id}  
            archived={archived} 
            onDelete={onDelete} 
            onArchive={onArchive}/>
        </div>
    );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
};

export default NoteDetail;