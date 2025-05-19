// app/Controllers/ColaboradoresApiController.js

const Colaboradores = require('../Models/ColaboradoresModel');

// Método para listar todos os colaboradores
exports.list = async (req, res) => {
  try {
    const colaboradores = await Colaboradores.findAll();
    return res.json(colaboradores);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar colaboradores' });
  }
};

// Método para obter um colaborador específico pelo id
exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const colaborador = await Colaboradores.findByPk(id);
    if (!colaborador) {
      return res.status(404).json({ error: 'Colaborador não encontrado' });
    }
    return res.json(colaborador);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter colaborador' });
  }
};

// Método para inserir um novo colaborador
exports.insert = async (req, res) => {
  const { nome, cargo } = req.body;
  try {
    const novoColaborador = await Colaboradores.create({ nome, cargo });
    return res.status(201).json(novoColaborador);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao inserir colaborador' });
  }
};
