const Redux = require('redux')

let state = [
  'Note 1 : This is note number one',
  'Note 2 : This is note number two',
  'Note 3 : This is note number three',
  'Note 4 : This is note number four'
]

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_NOTE':
      return [...state, action.text]
    case 'CLEAR_NOTES':
      return []
    default:
    return state
  }
}

const store = Redux.createStore(reducer, state)

module.exports = store
