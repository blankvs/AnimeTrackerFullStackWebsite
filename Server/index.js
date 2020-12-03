const express = require('express')
const GetterCtrl = require('./controllers/GetterController')
const ListCtrl = require('./Controllers/ListController')

const app = express()
const SERVER_PORT = 5000

app.use(express.json())

//GetterCtrl endpoints
app.get('/api/anime', GetterCtrl.fetchAnime)

//ListCtrl endpoints
app.post('/api/list/', ListCtrl.addToList)
app.put('/api/list/:id', ListCtrl.edit)
app.delete('/api/list/:id',ListCtrl.remove)

app.listen(5000,() =>console.log("Server"))