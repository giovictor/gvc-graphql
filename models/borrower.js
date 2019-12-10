const Sequelize = require('sequelize')
const db = require('../config/database')

const Borrower = db.define('borrower', {
    IDNumber: {
        type:Sequelize.STRING
    },
    lastname:{
        type:Sequelize.STRING
    },
    firstname:{
        type:Sequelize.STRING
    },
    mi: {
        type:Sequelize.STRING
    },
    course:{
        type:Sequelize.STRING
    }
}, { freezeTableName:true })

module.exports = Borrower