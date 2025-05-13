import React from "react";
import SearchBar from "./NotesSearchbar";
import { Link } from "react-router-dom";

function NotesHeader() {
    return (
        <header>
            <h1>MY NOTES</h1>
            <div className="header-navbar">
                <SearchBar />
                <Link>Arsip</Link>
            </div>
        </header>
    );
}

export default NotesHeader;