'use strict';

const express = require('express');
const path = require('path');
// eslint-disable-next-line import/no-unresolved
const app = express();

// Middlewares
var morgan = require('morgan')
app.use(morgan('combined'))

// Default Routes - Static file + index.html handler
app.use(express.static(path.join(path.resolve(), 'dist')));
app.get('/', function(req:any, res:any) {
  res.sendFile(path.join(process.cwd(), 'dist/index.html'));
});

app.get('/api/version', function(req:any, res:any) {
  res.json({
    'NodeJS Version': process.version,
    'Cloud Environment': process.env.CLOUD_ENV
  })
});

// Error handler
app.use((err:any, req:any, res:any, next:any) => {
  res.status(500).send('Internal Serverless Error: ' + err);
});

module.exports = app;
