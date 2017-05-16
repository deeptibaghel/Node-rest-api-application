const express = require('express');

var app = express() ;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'deepti',
    likes: [
      'coding',
      'travelling',
    ]
  });
});

app.get('/bad', (req,res) => {
  res.send('Page not found');
});
app.listen(3000);
