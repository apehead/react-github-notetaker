import React, { PropTypes } from 'react';

const NotesList = ({ notes }) => (
  <ul className="list-group">
    {notes.map((note, index) => (
      <li className="list-group-item" key={index}>{note}</li>
    ))}
  </ul>
);

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesList;
