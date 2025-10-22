const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Produto = sequelize.define('Produto', {
    ID_PRODUTO: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    DESCRICAO: { type: DataTypes.TEXT('medium'), allowNull: false },
    QUANTIDADE: { type: DataTypes.BIGINT, allowNull: false },
    VALOR: { type: DataTypes.STRING, allowNull: false },
    DATA_PRODUTO: { type: DataTypes.DATE, allowNull: true }
}, {
    tableName: 'PRODUTOS',
    timestamps: false
});

module.exports = Produto;