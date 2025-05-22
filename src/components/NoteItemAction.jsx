import React from "react";
import DeleteButton from "./NoteDeleteButton";

function NoteItemAction({ id, archived, onDelete, onArchive}) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchieveButton id={id} archived={archived} onArchive={onArchive} />
        </div>
    );
}

export default NoteItemAction;