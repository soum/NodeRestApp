var express = require('express');

var app = express();

app.get('/user', function(req, res) {
    res.send([{name:'soumya'}, {name:'santosh'}, {name:'soumya'}, {name:'saurabh'}]);
});
app.get('/user/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');