import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function DeleteButton({ id, onDelete }) {
    return (
        <button className="note-item__delete-button" onClick={() => onDelete(id)}><BsFillTrashFill /></button>
    );
}

export default DeleteButton;