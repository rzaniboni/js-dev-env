

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';


jsf.extend('faker', function() {
  // just ignore the passed faker instance
  var faker = require('faker/locale/it');
  // do other stuff
  return faker;
});

const json = JSON.stringify(jsf(schema));



fs.writeFile("./src/api/db.json", json, function(err) {
    if (err) {
        return console.log(chalk.red(err));
    } else {
        console.log(chalk.green("Mock data generated."))
    }
});
