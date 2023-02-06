const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    //create product model
    const productModel = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "available"
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'products'
    })
    return productModel;
}