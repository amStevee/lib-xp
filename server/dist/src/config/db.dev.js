import dotenv from 'dotenv';
dotenv.config();
var Pool = require("pg").Pool;
var parse = require('pg-connection-string').parse;
var config = parse(process.env.DATABASE_URL);
var pool = new Pool(config);
module.exports = pool;
