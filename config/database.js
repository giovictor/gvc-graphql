const Sequelize = require('sequelize')

const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const db = new Sequelize(`mysql://${user}:${password}@${host}:3306/${database}`)

module.exports = db
