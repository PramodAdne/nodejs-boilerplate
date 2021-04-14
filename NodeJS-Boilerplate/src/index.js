const express = require('express')
require('./db/mongoose')
const Task = require('./Models/task')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3001 

app.use(express.json())
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
}) 