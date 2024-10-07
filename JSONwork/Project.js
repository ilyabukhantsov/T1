'use strict'

var fs = require('fs');

fs.readFile("./persons.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(JSON.parse(data));
});
