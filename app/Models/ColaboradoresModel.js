// app/Models/ColaboradoresModel.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa a configuração do Sequelize

const Colaboradores = sequelize.define('Colaboradores', {
  // Definindo os campos com base na tabela 'colaboradores' do banco de dados
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // outros campos conforme a tabela 'colaboradores'
}, {
  tableName: 'colaboradores',
  timestamps: false, // Se não houver campos 'createdAt' e 'updatedAt'
});

module.exports = Colaboradores;
