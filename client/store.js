const Redux = require('redux')

const initialState = [
  'Reminder: Read react - JSX in Depth',
  'Reminder: Read react - conditional rendering'
]

const notes = function noteList(state = initialState, action) {
  switch(action.type) {
    case 'NOTE_CREATED':
      return [...state, action.text]
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
