import React from "react";
import NoteItem from "./NoteItem";

function Note() {
  return (
    <div className="container py-4">
      {/* Heading */}
      <h4 className="mb-4 fw-bold">Your Notes</h4>

      {/* Notes Grid */}
      <div className="row g-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="col-md-3" key={item}>
            <div className="card p-3 h-100">
              <div className="d-flex justify-content-between align-items-start">
                <span className="fw-semibold">My Title</span>
                <div>
                  <i className="bi bi-trash mx-1 cursor-pointer"></i>
                  <i className="bi bi-pencil-square mx-1 cursor-pointer"></i>
                </div>
              </div>
              <p className="text-muted mt-2 mb-0">
                Please wake up early
              </p>
            <NoteItem note={'note'}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;
