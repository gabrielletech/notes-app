import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, note, date, handleDeleteNote }) => {
    return (
        <div className='note'>
            <span>{note}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(id)}/>
            </div>
        </div>
    )
}

export default Note
