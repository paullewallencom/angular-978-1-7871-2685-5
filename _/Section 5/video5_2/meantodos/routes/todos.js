var express = require('express');
var router = express.Router();

// Get All Todos
router.get('/todos', function(req, res, next){
   res.send('TODOS API');
});

module.exports = router;