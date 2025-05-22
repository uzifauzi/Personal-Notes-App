import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
        
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            };
        })
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        })
    }

    onSubmitHandler(event) {
    event.preventDefault(); 
    this.props.addNote(this.state.title, this.state.body);
  }

    render () {
        return (
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder="Masukkan Judul" value={this.state.title} onChange={this.onTitleChangeHandler}/>
                <input type="text" placeholder="Masukkan Isi Catatan" value={this.state.body} onChange={this.onBodyChangeHandler}/>
                <button type="submit">Tambah Catatan</button>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NoteInput;