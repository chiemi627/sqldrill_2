const util = require('util');
const fs = require('fs');
const assert = require('assert');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/test.db');

function readSQL(filename) {
  var str = fs.readFileSync(filename, 'utf8');
  str = str.replace(/#.*?\n/g, '\n');
  str = str.replace(/#.*?$/, '');
  return str.replace(/\n/g, ' '); 
}

function exec_exercise() {
  return new Promise((onSuccess, onFailed) => {
      var query = readSQL("ex1.sql");
      db.all(query, {}, function (err, rows) {
        if (err) {
          onFailed(err);
        }
        onSuccess(rows);
      });        
  });  
}

function read_expected_data() {
  return JSON.parse(fs.readFileSync('data/expected.json', 'utf8'));
}

describe('Exercise 1', function () {
  it('your query should return the expected results', function () {
    return exec_exercise().then(
      (actual) => {        
        assert.deepEqual(actual, read_expected_data());
      },
      (err) => {
        assert.fail(err);
      }
    );
    
  })

})