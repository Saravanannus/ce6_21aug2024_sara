const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World-Sara')
})

app.listen(3000)