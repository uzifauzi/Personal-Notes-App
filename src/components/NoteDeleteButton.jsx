import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import PropTypes from "prop-types";

function DeleteButton({ id, onDelete }) {
    return (
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
            <BsFillTrashFill />
        </button>

    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DeleteButton;