let Sequelize = require("sequelize");

let db = new Sequelize(

    "postgres://zoeyemewxtzvyr:67d9b3ee66a9016bb2eb82df3e600078fdd57e9f6b71501f6d69496d1d4c98c8@ec2-35-174-118-71.compute-1.amazonaws.com:5432/d9ks7p6r08br17",

{
    dialect: "postgres",
    dialectOptions: {
        ssl: {

        rejectUnauthorized: false,
           
       }
    }

});
module.exports = db;