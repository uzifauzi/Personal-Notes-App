import React from "react";
import { BsArchive, BsArchiveFill } from "react-icons/bs";

function ArchieveButton({ id, archived, onArchive }) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>{archived ? <BsArchiveFill /> : <BsArchive />}</button>
    );
}

export default ArchieveButton;