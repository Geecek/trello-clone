const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs.readdirSync(__dirname)
  .filter(filename => filename !== 'index.js')
  .forEach((filename) => {
    const model = sequelize.import(path.join(__dirname, filename))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
