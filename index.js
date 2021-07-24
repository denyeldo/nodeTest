var express = require('express');
var app = express();
// for parsing the body in POST request
var bodyParser = require('body-parser');

//in memory database
var db = require('./nedb');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Get object with (key) or (key and timestamp)
 */
app.get('/object/:key',  function(req, res){

    let timestamp = req.query.timestamp;
    let query = {
        key : req.params.key
    }
    if(timestamp){
        query.timestamp = Number(timestamp);
    }
    console.log(query);
    db.findOne(
        query
       , function(err, user) {
         if (err) {
           res.send(err);
   
           return;
         }
   
         if (user === null) {
           res.json({
             type: 'error',
             message: 'Did not find a user with "id" of "' + req.params.id + '".'
           });
   
           return;
         }
         delete user._id;
         res.json(user);
     });
    
});


/**
 * Post method to add object
 */
app.post('/object', function (req, res) {
    var added = req.body;
    //insert or update
    for (var key in added) {
        console.log(key);
        console.log(added[key]);
        //keys.push({"key": key, "value": added[key],"timestamp" : new Date()});
        db.insert({"key": key, "value": added[key],"timestamp" : new Date().getTime()}, function(err, newObject) {
            if (err) {
              res.send(err);
      
              return;
            }
            delete newObject._id;
            res.json(newObject);
            return;
          });
    }
});

app.listen('3000', function(){
    console.log('Server listening on port 3000');
});