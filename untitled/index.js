/**
 * Created by rahulshrestha on 2/19/16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cats = require('./cat_routes.js')(app);

var server = app.listen(8000, function(){
    console.log('running at 8000');
});