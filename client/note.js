const React = require('react')

const Note = props => {
  return (
    <ul>
      <span>{ props.text }</span>
    </ul>
  )
}

module.exports = Note
