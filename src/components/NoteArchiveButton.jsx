import React from "react";
import { BsArchive, BsArchiveFill } from "react-icons/bs";
import PropTypes from "prop-types";

function ArchiveButton({ id, archived, onArchive }) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>{archived ? <BsArchiveFill /> : <BsArchive />}</button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool,
    onArchive: PropTypes.func.isRequired
}

export default ArchiveButton;