import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/NotesSearchbar";
import { getActiveNotes } from "../utils/local-data";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes()

        }
    }

    render() {
        return (
            <section className="home-page">
                <SearchBar />
                <h2>Daftar Notes</h2>
                <NoteList notes={this.state.notes} />
            </section>
        )
    }
}

export default HomePage;