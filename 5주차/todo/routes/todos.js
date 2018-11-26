var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const dbconfig = require('../dbconf');
const pool = mysql.createPool(dbconfig);
const TABLE_NAME = "todos_gs";

/* 할일 목록 */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    if (err){
      res.status(500).send();
      throw err; // not connected
    }

    let sqlStr = `SELECT id, status, title FROM ${TABLE_NAME}; `;
    console.log(sqlStr);
    connection.query(sqlStr, function(error, results, fields) {
      connection.release();
      if (error) throw error;
      res.json(results);
    });
  });
  //res.send('GET');
});

/* 할일 추가 */
router.post('/', function(req, res, next) {
  console.log(req.body);
  pool.getConnection(function(err, connection){
    if (err){
      res.status(500).send();
      throw err;
    }
    let sqlStr = `INSERT INTO ${TABLE_NAME}(status, title) VALUES (${req.body.status}, '${req.body.title}'); `;
    console.log(sqlStr);
    connection.query(sqlStr, function( error, results, fields) {
      connection.release();
      if (error) throw error;
      res.json(results);
    });
  });
  //res.send('POST');
});

/* 할일 삭제 */
router.delete('/', function(req, res, next) {
  console.log(req.query);
  pool.getConnection(function(err, connection) {
    if (err){
      res.status(500).send();
      throw err;
    }
    let sqlStr = `DELETE FROM ${TABLE_NAME} WHERE id=${req.query.todoId};`;
    console.log(sqlStr);
    connection.query(sqlStr, function( error, results, fields) {
      connection.release();
      if (error) throw error;
      res.json(fields);
    });
  });
  //res.send('DELETE');
});

/* 할일 수정 */
router.put('/', (req, res, next) => {
  console.log(req.body);
  pool.getConnection((err, connection) => {
    if (err){
      res.status(500).send();
      throw err;
    }
    let sqlStr = `UPDATE ${TABLE_NAME} SET status=${req.body.status} WHERE id=${req.body.todoId};`;
    console.log(sqlStr);
    connection.query(sqlStr, ( error, results, fields) => {
      connection.release();
      if (error) throw error;
      res.json(results);
    });
  });
  //res.send('PUT');
});

module.exports = router;
