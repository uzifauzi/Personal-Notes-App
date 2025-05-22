import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";

function DetailNotePageWrapper() {
    const { id } = useParams();
    return <DetailNotePage id={id} />;
}

class DetailNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };
    }

    render() {
        if(this.state.note == null) {
            return <p>Note tidak ditemukan!</p>
        }
        console.log('Received ID:', this.props.id);
        console.log('Fetched note:', this.state.note);
        return (
            <NoteDetail {...this.state.note} />
        );
    }
}

export default DetailNotePageWrapper;