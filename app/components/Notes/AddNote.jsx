import React, { PropTypes } from 'react';

class AddNote extends React.Component {

  constructor() {
    super();

    this.setRef = this.setRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setRef(ref) {
    this.note = ref;
  }

  handleSubmit() {
    const newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new note"
          ref={this.setRef}
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-default"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </span>
      </div>
    );
  }

}


AddNote.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default AddNote;
