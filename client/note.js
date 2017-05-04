const React = require('react')

const Note = props => {
  return (
    <li className='collection-item'>
      <span>{ props.text }</span>
    </li>
  )
}

module.exports = Note
