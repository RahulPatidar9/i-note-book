import React, { useContext, useEffect } from "react";
import NoteItem from "../components/NoteItem";
import noteContext from "../../src/context/notes/NoteContext";

function Note() {
  const { notes, getNotes } = useContext(noteContext);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Your Notes</h4>

      <div className="row g-3">
        {notes?.length === 0 && <p>No notes found</p>}

        {notes?.map((note) => (
          <div className="col-md-3" key={note._id}>
            <NoteItem note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;
