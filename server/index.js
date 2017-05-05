const express = require('express')
const app = express()
const respondStatic = express.static('./server/public')

app.use(respondStatic)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
