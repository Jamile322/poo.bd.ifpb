let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Pizza = db.define("Pizza",
    {
      id_pizza: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
      },
      sabor: {
          type: DataTypes.STRING,
          allowNull: false,
    },
    valor_pizza: {
        type: DataTypes.DOUBLE,
    }
}
)
module.exports = Pizza;