import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, createdAt, body}) {
    return (
        <div className="note-item">
            <NoteItemContent id={id} title={title} createdAt={createdAt} body={body} />
        </div>
    );
}

export default NoteItem;