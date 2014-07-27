#!/usr/bin/env node
var Runner = require("../lib/runner");

var r = new Runner();

require('whereis')('java', function searched(err) {
  // yep, we still need Java for the crawler & browsertime
  if (err) {
    console.error(
      'Could not find Java, make sure it is installed in your $PATH');
  }
  else {
    r.run(function() {
      console.log("Finished callback");
    });
  }
});
