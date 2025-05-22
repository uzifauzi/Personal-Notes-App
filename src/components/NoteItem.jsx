import React from "react";
import NoteItemContent from "./NoteItemContent";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body}) {
    return (
        <div className="note-item">
            <NoteItemContent id={id} title={title} createdAt={createdAt} body={body} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteItem;