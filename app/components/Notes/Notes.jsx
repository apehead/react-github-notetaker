import React, { PropTypes } from 'react';

import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({ username, addNote, notes }) => (
  <div>
    <h3>Notes for {username}</h3>
    <AddNote
      addNote={addNote}
    />
    <NotesList
      notes={notes}
    />
  </div>
);

Notes.propTypes = {
  username: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired
};

export default Notes;
