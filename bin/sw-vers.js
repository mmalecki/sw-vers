#!/usr/bin/env node
var swVers = require('../');
swVers(function (e, result) {
  if (e) {
    console.log(JSON.stringify({ error: e.message }));
    process.exit(1);
  }

  console.log(JSON.stringify(result));
});
