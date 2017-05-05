const React = require('react')

const Note = props => {
  return (
    <li className='collection-item'>
      <span>{ props.text }</span>
    </li>
  )
}

function NoteList(props) {
  return(
    <ul className='collection with-header'>
      <li className='collection-header'><h4>React Notes</h4></li>
        {
          props.notes.map((note, i) => {
            return <Note key={ i } text={ note }/>
          })
        }
    </ul>
  )
}

module.exports = NoteList
