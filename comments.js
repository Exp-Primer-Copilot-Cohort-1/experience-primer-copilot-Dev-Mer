// Create web server
var express = require('express');
var app = express();

// Set port to listen to
var port = process.env.PORT || 8080;

// Set up static files
app.use(express.static(__dirname + '/public'));

// Import the comments module
var comments = require('./comments');

// Set up routes
// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments.get());
});

// Add a comment
app.post('/comments', function(req, res) {
  var comment = req.query.comment;
  comments.add(comment);
  res.sendStatus(200);
});

// Start the server
app.listen(port, function() {
  console.log('Server started on port ' + port);
});