const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

function createModel() {
  colors = sequelize.define(
        'color', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.ENUM,
                values: ['Purple','Sky blue','Green','Yellow','Orange','Red','White','Blue'],
                allowNull: false
            },
        }, {
            timestamps: false,
            freezeTableName: true
        }
    );
    

    return colors
}
const modelAttributes = [ 
    'id', 
    'name', 
    ]; 
module.exports = {createModel,modelAttributes};
