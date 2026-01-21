import React, { useContext, useEffect ,useState } from "react";
import NoteItem from "../components/NoteItem";
import noteContext from "../../src/context/notes/NoteContext";

function Note() {
  const { notes, getNotes, editNote, createNotes, deleteNotes } =
    useContext(noteContext);

  const [form, setForm] = useState({ title: "", description: "" });
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  //Create
  const handleCreate = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;
    createNotes(form.title, form.description);
    setForm({ title: "", description: "" });
  };
  //update
  const handleUpdate = () => {
    editNote(editingNote._id, editingNote.title, editingNote.description);
    setEditingNote(null);
  };
  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Your Notes</h4>

      {/* CREATE NOTE */}
      <form onSubmit={handleCreate} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="btn btn-primary">Add Note</button>
      </form>

      {/* NOTES LIST */}
      <div className="row g-3">
        {notes.length === 0 && <p>No notes found</p>}

        {notes.map((note) => (
          <div className="col-md-3" key={note._id}>
            <NoteItem
              note={note}
              onEdit={setEditingNote}
              onDelete={deleteNotes}
            />
          </div>
        ))}
      </div>

      {/* EDIT NOTE */}
      {editingNote && (
        <div className="card p-3 mt-4">
          <h5>Edit Note</h5>

          <input
            className="form-control mb-2"
            value={editingNote.title}
            onChange={(e) =>
              setEditingNote({
                ...editingNote,
                title: e.target.value,
              })
            }
          />

          <textarea
            className="form-control mb-2"
            value={editingNote.description}
            onChange={(e) =>
              setEditingNote({
                ...editingNote,
                description: e.target.value,
              })
            }
          />

          <button
            className="btn btn-success me-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setEditingNote(null)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
