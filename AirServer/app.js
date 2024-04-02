const express = require('express');

const path = require('path');

const http = require('http');
// cors- can requested from one domain and used by another domain
const cors = require('cors');
require('./db/mongoConnect');
const { routesInit } = require('./routs/configRouts');
const app = express();
//  This allows requests from any origin (any domain)
// This server is willing to accept credentials such as cookies or authorization headers from the client
app.use(cors(
  {
    origin:true,
    credentials:true
  }
  ));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
routesInit(app);
const server = http.createServer(app);
server.listen(3001);
