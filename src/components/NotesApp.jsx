import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailNotePage from "../pages/DetailNotePage";

function NotesApp() {
    return (
        <div className="notes-app">
            <header>
            <h1>MY NOTES</h1>
            <div className="header-navbar">
                <Link to="/" style={{ display: 'none' }}>Home</Link>
                <Link to="/new-note">Tambah Note</Link>
                <Link to="/arsip">Arsip</Link>
            </div>
            </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/:id" element={<DetailNotePage />}/>
            </Routes>
        </main>
        </div>
    );
}

export default NotesApp;