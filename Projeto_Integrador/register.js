const express = require('express');
const router = express.Router();
const db = require('db');

router.post('/register', (req, res) => {
    const { nome, email, usuario, senha } = req.body;

    const sql = 'INSERT INTO usuarios (nome, email, usuario, senha) VALUES (?, ?, ?, ?)';

    db.query(sql, [nome, email, usuario, senha], (err, result) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Erro ao cadastrar o usuário' });
            console.error('Erro ao inserir no banco:', err);
        } else {
            res.status(200).json({ success: true, message: 'Usuário cadastrado com sucesso' });
        }
    });
});

module.exports = router;
