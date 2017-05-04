const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Note = require('./note')

function App(props) {
  console.log(props)
  return(
    <ul>
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
