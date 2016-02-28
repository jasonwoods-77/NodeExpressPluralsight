var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var nav = [
  {Link: '/Books', Text: 'Books'},
  {Link: '/Authors', Text: 'Authors'}
];
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));

//app.set('view engine', 'jade');
//app.set('view engine', '.hbs');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function(request, response) {
  response.render('index', {
    title: 'hello from render',
    nav: [
      {Link: '/Books', Text: 'Books'},
      {Link: '/Authors', Text: 'Authors'}
    ]
  });
});

app.listen(port, function(err) {
  console.log('running server on port ' + port);
});

