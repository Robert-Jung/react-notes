const Redux = require('redux')

const notes = function noteList(state = [], action) {
  switch(action.type) {
    case 'NOTE_CREATED':
      return [...state, action.text]
    case 'NOTES_LOADED':
      return action.notes
    default:
      return state
  }
}

const noteInput = function newNote(state = '', action) {
  switch(action.type) {
    case 'INPUT_CHANGED':
      return action.text
    case 'NOTE_CREATED':
      return ''
    default:
    return state
  }
}

const reducer = Redux.combineReducers({ notes, noteInput })
const store = Redux.createStore(reducer)

module.exports = store
