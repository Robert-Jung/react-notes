const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const NoteList = require('./NoteList')
const NoteForm = require('./NoteForm')

function render() {
  const currentState = store.getState()
  const $root = document.querySelector('#app')

  ReactDOM.render(
  <div>
    <NoteForm text={ currentState.noteInput }/>
    <NoteList notes={ currentState.notes }/>
  </div>,
  $root)
}

store.subscribe(render)

render()
