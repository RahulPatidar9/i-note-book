import React, { useState } from "react";
import noteContext from "./NoteContext.js";
import { deleteNoteAPI, getAllNotesAPI, updateNoteAPI ,addNoteAPI} from "../../config/api";

const NoteState = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Fetch notes from server
  const getNotes = async () => {
    try {
      const response = await getAllNotesAPI();
      if (response.data) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  //Delete notes from server
  const deleteNotes = async(id)=>{
    try {
     await deleteNoteAPI(id);
    setNotes((prev)=>prev.filter((notes._id !== id)))
    } catch (error) {
           console.error("Error delete notes:", error);
    }
  }

  const createNotes = async(title,description)=>{
  try {
     const response = await addNoteAPI({title,description})
   setNotes((prev)=>[response.data.note , ...prev])
  } catch (error) {
     console.error("Error create notes:", error);
  }
  }

  const editNote = async(id,title,description)=>{
    try {
      await updateNoteAPI(id,{title,description});
      setNotes((prev)=>prev.map((note)=>note._id=== id ? { ...note, title, description} : note))
    } catch (error) {
       console.error("Error delete notes:", error);
    }
  }
  return (
    <noteContext.Provider value={{ notes, getNotes,editNote,createNotes,deleteNotes }}>
      {children}
    </noteContext.Provider>
  );
};

export default NoteState;
