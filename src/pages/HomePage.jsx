import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/NotesSearchbar";
import { getAllNotes } from "../utils/local-data";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: getAllNotes()

        }
    }

    render() {
        return (
            <section className="home-page">
                <SearchBar />
                <h2>Daftar Notes</h2>
                <NoteList notes={this.state.contacts} />
            </section>
        )
    }
}

export default HomePage;