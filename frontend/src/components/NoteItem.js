import React from "react";

function NoteItem({ note,onEdit,onDelete }) {
  return (
    <div className="card p-3 h-100">
      <div className="d-flex justify-content-between align-items-start">

        <span className="fw-semibold">{note.title}</span>

        {/* <i class="fa-solid fa-file-pen"></i>
                <i class="fa-solid fa-trash-arrow-up"></i> */}
        <div>
          <i className="bi bi-trash mx-1 cursor-pointer" onClick={()=>{if(window.confirm("Delete this note?")){onDelete(note._id)}}} ></i>
          <i className="bi bi-pencil-square mx-1 cursor-pointer" onClick={()=>onEdit(note)}></i>
        </div>
      </div>

      <p className="text-muted mt-2 mb-0">
        {note.description}
      </p>
    </div>
  );
}

export default NoteItem;
