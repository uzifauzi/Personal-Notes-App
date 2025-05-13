import React from "react";
import NotesApp from "./components/NotesApp";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <NotesApp />
    </BrowserRouter>
);