const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sksEnergy', 'postgres', "admin", {
    host: '127.0.0.1',
    dialect: 'postgres',

});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Produit = require('./produit')(sequelize, DataTypes);
db.News = require('./news')(sequelize, DataTypes);
//db.sequelize.sync({ force: true });


console.log('All models were synchronized successfully.');
module.exports = db;
