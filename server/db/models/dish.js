const Sequelize = require('sequelize')
const db = require('../db')

const Dish = db.define('dish', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Dish
