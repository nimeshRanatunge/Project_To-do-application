//manipulate data, handle routes , passing data to view etc
var bodyParser = require('body-parser') // middleware
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'run fast'}]
var urlencodedParser = bodyParser.urlencoded({ extended: false }) // middleware that we want to run in post method

module.exports = (app)=>{
    app.get('/todo', (req, res)=>{
        res.render('todo', {todos: data})
    }) //request handlers

    app.post('/todo', urlencodedParser, (req, res)=>{
        //add body-parser middleware
        //grab data in req body and push that data to data array
        data.push(req.body)
        //send this data to frontend
        res.render('todo', {todos: data})
    })

    app.delete('/todo', (req, res)=>{

    })
}