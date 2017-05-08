const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const respondStatic = express.static('./server/public')

app.use(respondStatic)
app.use(bodyParser.json())

const notes = [
  'Reminder: Read react - JSX in Depth',
  'Reminder: Read react - conditional rendering'
]

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.post('/notes', (req, res) => {
  const data = req.body
  notes.push(data.note)
  res.status(201).json(data)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
