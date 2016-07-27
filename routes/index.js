var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*simple rest api*/
router.get('/livecheck', function(req, res){
   var responseObject = { message: 'ok' };
   res.send(responseObject);    
});

/*path 1 variable*/
router.get('/ilike/:icecreamchoice', function(req, res){
   var choice = req.params.icecreamchoice;
   var responseObject = { message: 'I like ' + choice + 'as well' }
   res.send(responseObject);
});

/*path 2 variable*/
router.get('/ilike/:icecreamchoice/:name', function(req, res){
   var choice = req.params.icecreamchoice;
   var name = req.params.name;
   var responseObject = { message: 'Hey '+name+' I like ' + choice + 'as well' }
   res.send(responseObject);
});

/*Methodo Post
var database = [];

router.post('/data/:icecreamchoice/:name', function(req, res){
   var choice = req.params.icecreamchoice;
   var name = req.params.name;
   database.push({choice: choice, name:name});
    
   var responseObject = { message: 'Hey '+name+' I like ' + choice + 'as well' }
   res.send(responseObject);
});*/

/*Methodo Post w/ If*/
var database = [];

router.post('/data/:icecreamchoice/:name', function(req, res){
   var choice = req.params.icecreamchoice;
   var name = req.params.name;
   if(name == 'tobias'){
      
     database.push({choice: choice, name:name});
     var responseObject = { message: 'Hey '+name+' I like ' + choice + 'as well' }
     res.send(responseObject);    
   } else {
       res.status(401).send();
   }
   
});

/*get database data*/
router.get('/mydata', function(req, res){
    if (database.length == 0 ){
        res.status(404).send();
    }else{
     res.send(database);   
    }    
});

/*HTTP Headers*/
router.get('/test', function(req, res){
   var logvalue = req.headers['log'];
    if(logvalue && logvalue == 'info'){
        res.send({message:'pass'})
    }else{
        res.status(401).send();
    }
});

module.exports = router;
