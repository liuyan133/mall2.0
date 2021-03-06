'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://172.20.18.13:8085"'
  // BASE_API: '"http://admin-api.macrozheng.com"'
})
