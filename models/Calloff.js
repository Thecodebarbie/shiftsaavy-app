const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Calloff extends Model {}

Calloff.init(
    {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        schedule_id : {
            type : DataTypes.INTEGER,
            references : {
                model : "schedule",
                key : "id"
            }
        },
        employee_id : {
            type : DataTypes.INTEGER,
            references : {
                model : "employee",
                key : "id"
            }

        },
        reason : {
            type : DataTypes.STRING
        },
        date_created : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : DataTypes.NOW
        },
        status : {
            type : DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps : false,
        freezeTableName : true,
        underscored : true,
        modelName : "calloff"
    }
)

module.exports = Calloff