const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        postBody: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 1000]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Books"
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            foreignKey: true,
            references: {
                model:"user",
                key: "id",
            }
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'entry',
    }
);

module.exports = Entry;