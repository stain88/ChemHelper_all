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

