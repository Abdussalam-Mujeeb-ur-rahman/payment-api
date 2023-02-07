const config = require('../config/config')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD,{
    host: config.HOST,
    dialect: config.dialect,
    operationsAliases: false
}
);

sequelize.authenticate()
.then(() => {
    console.log('Connection successful!')
}).catch(err => console.log(err))

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

//add models
db.products = require('./products')(sequelize, DataTypes)
db.users = require('./user')(sequelize, DataTypes)
db.transactions = require('./transaction')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('Table synced successfully!')
}).catch(err => console.log(`table not synced successfully, ${err}`))

module.exports = db