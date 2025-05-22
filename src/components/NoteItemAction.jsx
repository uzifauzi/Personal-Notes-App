import React from "react";
import DeleteButton from "./NoteDeleteButton";
import PropTypes from "prop-types";
import ArchiveButton from "./NoteArchiveButton";

function NoteItemAction({ id, archived, onDelete, onArchive}) {
    return (
        <div className="note-item__action">
            <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

NoteItemAction.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default NoteItemAction;