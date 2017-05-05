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
    const { noteInput } = store.getState()
    store.dispatch({
      type: 'NOTE_CREATED',
      text: noteInput
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
