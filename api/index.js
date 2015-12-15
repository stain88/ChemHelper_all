var express         = require('express'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    cors            = require('cors'),
    path            = require('path'),
    morgan          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    methodOverride  = require('method-override');

var app             = express(),
    config          = require(path.join(__dirname,'config','config')),
    secret          = config.secret;

mongoose.connect(config.database);

app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  };
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
  credentials: true,
  origin: true
}));

var routes = require(path.join(__dirname,'config', 'routes'));
app.use('/api', routes);

app.listen(process.env.PORT || 3000);
