var express = require('express')

var todoController = require('./controllers/to-do-controller')

var app = express()

//set up template engine
app.set('view engine', 'ejs')

//fire controllers
todoController(app)

//inbuilt express middleware (EXPRESS STATIC)
app.use('assets', express.static('./public')) //when go to assets route it maps to static file  

//listen to a port
app.listen(3000)
console.log('you are listning to port 3000')