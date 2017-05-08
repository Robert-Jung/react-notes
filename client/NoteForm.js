const React = require('react')
const store = require('./store')

const NoteForm = props => {
  const { text } = props
  function handleChange(event) {
    store.dispatch({
      type: 'INPUT_CHANGED',
      text: event.target.value
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    const state = store.getState()
    const note = { note: state.noteInput }
    fetch('/notes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(note)
    }).then((res) => {
        return res.json()
    }).then((data) => {
      store.dispatch({
        type: 'NOTE_CREATED',
        text: data.note
      })
    })
  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div className='input-field col s12'>
          <textarea className='materialize-textarea' placeholder='Write a Note!' value={ text } onChange={ handleChange }/>
          <button className='btn' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

module.exports = NoteForm
