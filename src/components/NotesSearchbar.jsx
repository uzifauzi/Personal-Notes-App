import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange}) {
    return (
        <input type="text" className="notes-search" placeholder="Cari notes berdasarkan judul" value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;