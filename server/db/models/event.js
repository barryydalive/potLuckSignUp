const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  date: {
    type: Sequelize.DATEONLY,
  },
  location: {
    type: Sequelize.STRING,
  },
})

module.exports = Event
