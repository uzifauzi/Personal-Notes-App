import React from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";

function AddNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler(title, body) {
        addNote({title, body});
        navigate("/");
    }

    return (
        <div className="add-note">
            <h1>Tambah Note Baru</h1>
            <NoteInput addNote={onAddNoteHandler}/>
        </div>
    );
}

export default AddNotePage;