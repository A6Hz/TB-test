const express = require('express')
const cors = require('cors')
const app = express()
const fileController = require('./controllers/files.controller')
const port = 3000

app.use(cors({ origin: '*' }))
app.use('/files', fileController)

app.listen(port, () => {
  console.log(`API listening on port http://localhost:${port}`)
})
