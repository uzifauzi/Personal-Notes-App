import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";
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
    }

    onDeleteHandler(id) {
        deleteNote(id);
        
        this.props.navigate("/");
    }

    render() {
        if(this.state.note == null) {
            return <p>Note tidak ditemukan!</p>
        }
        
        const { id, title, createdAt, body } = this.state.note;
        
        return (
        <NoteDetail
        id={id}
        title={title}
        createdAt={createdAt}
        body={body}
        onDelete={this.onDeleteHandler}
      />
    );
    }
}


DetailNotePage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func
}

export default DetailNotePageWrapper;