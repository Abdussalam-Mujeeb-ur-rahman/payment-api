const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    //create product model
    const transactionModel = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        amount: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'processing'
        },
        reference: {
            type: DataTypes.STRING
        },
        custumer_ID: {
            type: DataTypes.INTEGER,
            allowNull: false            
        },
        product_ID: {
            type: DataTypes.INTEGER,
            allowNull: false            
        }
    }, {
        tableName: 'transactions'
    })
    return transactionModel;
}