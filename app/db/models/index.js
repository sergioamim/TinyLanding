const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/database.json')[env];

const refactoredConfig = Object.assign(config);
refactoredConfig.storage = path.join(__dirname, '../../../', refactoredConfig.storage);

const db = {};
const { Op } = Sequelize;

config.operatorsAliases = Op;
let sequelize = null;

sequelize = new Sequelize(refactoredConfig);

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
