import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailNotePage from "../pages/DetailNotePage";
import AddNotePage from "../pages/AddNotePage";
import ArchiveNotePage from "../pages/ArchiveNotePage";
import NotFoundPage from "../pages/NotFoundPage";

function NotesApp() {
    return (
        <div className="notes-app">
            <header>
            <h1>MY NOTES</h1>
            <div className="header-navbar">
                <Link to="/" style={{ display: 'none' }}>Home</Link>
                <Link to="/new-note">Tambah Note</Link>
                <Link to="/archive-note">Arsip</Link>
            </div>
            </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/:id" element={<DetailNotePage />}/>
                <Route path="/new-note" element={<AddNotePage />}/>
                <Route path="/archive-note" element={<ArchiveNotePage />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
        </div>
    );
}

export default NotesApp;