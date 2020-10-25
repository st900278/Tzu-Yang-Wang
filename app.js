var express = require('express')
var app = express()
var path = require('path');
var fs = require('fs');
var mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
//app.use(express.static('../static'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/fortawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

var head = fs.readFileSync("views/head.html").toString();
var sidenav = fs.readFileSync("views/sidenav.html").toString();
var footer = fs.readFileSync("views/footer.html").toString();

app.get('/', function (req, res) {
  res.render('index.html', {"head": head, "sidenav": sidenav, "footer": footer});
})

app.get('/project', function (req, res) {
  res.render('project.html', {"head": head, "sidenav": sidenav, "footer": footer});
})

app.get('/publication', function (req, res) {
  res.render('publication.html', {"head": head, "sidenav": sidenav, "footer": footer});
})

app.get('/blog', function (req, res) {
  res.render('blog.html', {"head": head, "sidenav": sidenav, "footer": footer});
})


app.get('/link', function (req, res) {
  res.render('link.html', {"head": head, "sidenav": sidenav, "footer": footer});
})

app.listen(5000)
