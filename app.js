var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 7777);
app.set('view engine','ejs')
app.use(express.static(__dirname));
app.set("views","./views")
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

app.get("/",function(req,res){
    res.render("index");
})