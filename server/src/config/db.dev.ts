import dotenv from 'dotenv';
dotenv.config()

const Pool = require("pg").Pool;

const parse = require('pg-connection-string').parse;

const config = parse(process.env.DATABASE_URL)

const pool = new Pool(config)



module.exports = pool;