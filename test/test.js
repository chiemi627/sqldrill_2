const util = require('util');
const fs = require('fs');
const assert = require('assert');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/twitter.db');

function readSQL(filename) {
  var str = fs.readFileSync(filename, 'utf8');
  str = str.replace(/#.*?\n/g, '\n');
  str = str.replace(/#.*?$/, '');
  return str.replace(/\n/g, ' '); 
}

function exec_exercise(sqlfile) {
  return new Promise((onSuccess, onFailed) => {
      var query = readSQL(sqlfile);
      db.all(query, {}, function (err, rows) {
        if (err) {
          onFailed(err);
        }
        onSuccess(rows);
      });        
  });  
}

function read_expected_data(answer_file) {
  return JSON.parse(fs.readFileSync(answer_file, 'utf8'));
}

describe('Exercise 1', function () {
  it('株式会社タニタ さんのメールアドレスを求めよ', function () {
    return exec_exercise("queries/ex1.sql").then(
      (actual) => {        
        assert.deepEqual(actual, read_expected_data('results/ex1.json'));
      },
      (err) => {
        assert.fail(err);
      }
    );
    
  })
})

describe('Exercise 2', function () {
  it('SHARP シャープ株式会社をフォローする人のアカウント名を求めよ。', function () {
    return exec_exercise("queries/ex2.sql").then(
      (actual) => {        
        assert.deepEqual(actual, read_expected_data('results/ex2.json'));
      },
      (err) => {
        assert.fail(err);
      }
    );
    
  })

})

describe('Exercise 3', function () {
  it('SHARP シャープ株式会社さんをフォローする人の表示名（name)を求めよ。', function () {
    return exec_exercise("queries/ex2.sql").then(
      (actual) => {        
        assert.deepEqual(actual, read_expected_data('results/ex2.json'));
      },
      (err) => {
        assert.fail(err);
      }
    );
    
  })

})