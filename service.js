const express = require('express')
const app = express()
const port = 3070

app.use('/v1', require('./routes/index'));

app.listen(port, () => console.log(`App listening on port ${port}!`))