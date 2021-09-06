//manipulate data, handle routes , passing data to view etc
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'run fast'}]

module.exports = (app)=>{
    app.get('/todo', (req, res)=>{
        res.render('to-do', {todos: data})
    }) //request handlers

    app.post('/todo', (req, res)=>{
        
    })

    app.delete('/todo', (req, res)=>{

    })
}