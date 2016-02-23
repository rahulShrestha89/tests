/**
 * Created by rahulshrestha on 2/23/16.
 */
var r = require('request').defaults({
    json: true

});

module.exports = function (app) {

    app.get('/pets',function (req, res){

        r({ uri: 'http://localhost:3000/dog'}, function(error, response, body) {
            if(!error && response.statusCode === 200){
                res.join(body);
            }
            else{
                res.send(response.statusCode);
            }
        });
    });
};