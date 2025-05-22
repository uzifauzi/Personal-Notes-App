import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";

function DetailNotePageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailNotePage id={id} navigate={navigate}/>;
}

class DetailNotePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        
        this.props.navigate("/");
    }

    onArchiveHandler(id) {
        const note = this.state.note;
        if (note.archived) {
        unarchiveNote(id);
        } else {
        archiveNote(id);
        }
        this.setState({
        note: getNote(id),
        });
    }

    render() {
        if(this.state.note == null) {
            return <p>Note tidak ditemukan!</p>
        }
        
        const { id, title, createdAt, body, archived } = this.state.note;
        
        return (
        <NoteDetail
        id={id}
        title={title}
        createdAt={createdAt}
        body={body}
        archived={archived}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
      />
    );
    }
}


DetailNotePage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func
}

export default DetailNotePageWrapper;