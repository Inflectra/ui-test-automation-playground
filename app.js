const express = require('express')
const app = express()
const shuffle = require('shuffle-array')

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// Routing and launch
app.set('view engine', 'pug')
app.get('/', (req, res) => res.send('UI Test Automation Playground'))
app.use('/static', express.static('static'))

app.get('/home', function (req, res) {
  res.render('Home', {
    title: 'UI Test Automation Playground',
    homeActive: true
  })
})

app.get('/resources', function (req, res) {
  res.render('Resources', {
    title: 'Resources',
    resourceActive: true
  })
})

app.get('/dynamicid', function (req, res) {
  res.render('DynamicID', {
    title: 'Dynamic ID',
    buttonId: guid()
  })
})

app.get('/loaddelay', function (req, res) {
  function render() {
    res.render('LoadDelay', {
      title: 'Load Delays'
    })
  }
  setTimeout(render, 5000);
})

app.get('/click', function (req, res) {
  res.render('Click', {
    title: 'Click'
  })
})

app.get('/textinput', function (req, res) {
  res.render('TextInput', {
    title: 'Text Input'
  })
})

app.get('/ajax', function (req, res) {
  res.render('Ajax', {
    title: 'AJAX Data'
  })
})

app.get('/ajaxdata', function (req, res) {
  function render() {
    res.send('Data loaded with AJAX get request.')
  }
  setTimeout(render, 15000);
})

app.get('/clientdelay', function (req, res) {
  res.render('ClientDelay', {
    title: 'Client Side Delay'
  })
})

app.get('/classattr', function (req, res) {

  var collection = ['btn-primary', 'btn-success', 'btn-warning'];
  shuffle(collection);

  res.render('ClassAttr', {
    title: 'Class Attribute',
    button1Class: collection[0],
    button2Class: collection[1],
    button3Class: collection[2]
  })
})

app.get('/verifytext', function (req, res) {
  res.render('VerifyText', {
    title: 'Verify Text'
  })
})

app.get('/hiddenlayers', function (req, res) {
  res.render('HiddenLayers', {
    title: 'Hidden Layers'
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('UI Test Automation Playground is listening on port ' + port))