/**
 * Created by rahulshrestha on 2/23/16.
 */
/**
 * Created by rahulshrestha on 2/23/16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dogs');

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var petRoutes = require('./../routes/pet.js')(app);

var server = app.listen(3002, function(){
    console.log('running at 3002');
});