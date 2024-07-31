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

app.use('/static', express.static('static'))

app.get('/', function (req, res) {
  res.render('Home', {
    title: 'UI Test Automation Playground',
    homeActive: true
  })
})

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

app.get('/progressbar', function (req, res) {
  res.render('ProgressBar', {
    title: 'Progress Bar'
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

app.get('/scrollbars', function (req, res) {
  res.render('Scrollbars', {
    title: 'Scrollbars'
  })
})

app.get('/visibility', function (req, res) {
    res.render('Visibility', {
      title: 'Visibility'
    })
  })

app.get('/sampleapp', function (req, res) {
    res.render('SampleApp', {
      title: 'Sample App'
    })
  })

app.get('/mouseover', function (req, res) {
    res.render('MouseOver', {
      title: 'Mouse Over'
    })
  })  

app.get('/nbsp', function (req, res) {
    res.render('Nbsp', {
      title: 'Non-Breaking Space'
    })
  })  

app.get('/overlapped', function (req, res) {
  res.render('Overlapped', {
    title: 'Overlapped Element'
  })
})  

app.get('/shadowdom', function (req, res) {
  res.render('ShadowDom', {
    title: 'Shadow DOM'
  })
})

app.get('/alerts', function (req, res) {
  res.render('Alerts', {
    title: 'Alerts'
  })
})

app.get('/upload', function (req, res) {
  res.render('Upload', {
    title: 'File Upload'
  })
})

app.get('/dynamictable', function (req, res) {

  function genmetric(m)
  {
    switch(m)
    {
      case "CPU":
        return Math.floor(Math.random()*100)/10.0 + "%";
      case "Memory":
        return Math.floor(Math.random()*1000)/10.0 + " MB";
      case "Disk":
        return Math.floor(Math.random()*10)/10.0 + " MB/s";
      case "Network":
        return Math.floor(Math.random()*100)/10.0 + " Mbps";
      default:
    }
    return "";
  }

  var tasks = ["System", "Firefox", "Chrome", "Internet Explorer"];
  shuffle(tasks);

  var metrics = ["CPU", "Memory", "Disk", "Network"];
  shuffle(metrics);

  var rows = [];
  for(var t in tasks)
  {
    var row = [tasks[t]];
    for(var m in metrics)
    {
      row.push(genmetric(metrics[m]));
    }
    rows.push(row);
  }

  var columns = ["Name"];
  columns.push.apply(columns, metrics);

  var cpuColumnIndex = columns.indexOf("CPU");
  var chromeRowIndex = tasks.indexOf("Chrome");
  var chromeCPU = rows[chromeRowIndex][cpuColumnIndex];

  var table = {
    name: "Tasks",
    desc: "Task Manager", 
    columns: columns,
    rows: rows,
    chromeCPU: chromeCPU
  };

  res.render('DynamicTable', {
    title: 'Dynamic Table', table: table
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('UI Test Automation Playground is listening on port ' + port))