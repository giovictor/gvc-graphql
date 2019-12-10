const router = require('express').Router()
const Borrower = require('../models/borrower')

exports.findAllBorrowers =  Borrower.findAll({
    attributes:['IDNumber','lastname','firstname','mi','course']
})
.then(response => response)
.catch(err => console.log(err))