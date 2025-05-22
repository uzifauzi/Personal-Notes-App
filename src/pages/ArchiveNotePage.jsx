import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

class ArchiveNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archiveNotes: getArchivedNotes()
        }
    }

    render() {
        return (
        <section className="home-page">
            <h2>Daftar Notes Terarsip</h2>
            <NoteList notes={this.state.archiveNotes} />
        </section>
        );
    }
}

export default ArchiveNotePage;