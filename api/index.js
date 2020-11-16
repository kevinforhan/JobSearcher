const createServer = require('http').createServer; 
const url = require('url')
const axios = require('axios')
const chalk = require('chalk')
const config = require('./config')

const headers = {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Methods': 'GET'
}; 