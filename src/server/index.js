const express = require('express')
const path = require('path')
const reload = require('reload')
const app = express()
reload(app)
const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.use(express.static(__dirname))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
