const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Note = require('./note')

function App(props) {
  console.log(props)
  return(
    <ul className='collection with-header'>
      <li class='collection-header'><h3>React Notes</h3></li>
        {
          props.notes.map((note, i) => {
            return <Note key={ i } text={ note }/>
          })
        }
    </ul>
  )
}

function render() {
  const notes = store.getState()
  const $root = document.querySelector('#app')

  ReactDOM.render(<App notes={ notes }/>, $root)
}

store.subscribe(render)

render()
