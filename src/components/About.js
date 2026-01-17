import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
function About() {
    const a = useContext(noteContext)
  return (
    <div>About the {a?.name} and company name is {a?.company}</div>
  )
}

export default About