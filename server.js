const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile').development;
const db = knex(knexConfig);

const server = express();

module.exports = server;
