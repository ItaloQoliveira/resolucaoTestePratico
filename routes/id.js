const UsoaModel = require('../models/uso');
const express = require('express')
const router = express.Router();

router.put('/request', (req, res) => { //função post para adicionar documento ao bd

    try {
        const uso = UsosModel.create(req.body); //cria documento no bd com base no body do post
        return res.status(201).send(uso);
    }
    catch (err) {
        if (err) {
            return res.status(500).send({ error: 'Erro ao cadastrar documento!' });
        }
    }
    
})


module.exports = router;