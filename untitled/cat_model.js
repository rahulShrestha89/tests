/**
 * Created by rahulshrestha on 2/19/16.
 */

var mongoose = require('mongoose');

var catSchema = mongoose.Schema({

    name: String,
    age: Number,
    type: String

});

module.exports = mongoose.model('Cat',catSchema);