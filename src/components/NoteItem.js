import React from 'react'

function NoteItem(props) {
    const {note} = props
  return (
    <div> 
          <i class="fa-solid fa-eraser"></i>
              <i class="fa-solid fa-pen"></i>
        <h1>{note}</h1> 
      
              </div>
  )
}

export default NoteItem