const RegistroModel = require('../models/registro');
const UsoModel = require('../models/uso');
const express = require('express')
const router = express.Router();

router.post('/', (req, res) => { //função post para adicionar documento 

    try {
        const uso = UsoModel.create(req.body); //cria documento no db com base no body do post
        return res.status(201).send(uso);
    }
    catch (err) {
        if (err) {
            return res.status(500).send({ error: 'Erro ao cadastrar documento de venda' });
        }
    }

})
router.get('/', (req, res) => { 
   
    try {
        name = req.query.name
        user = req.query.user //parametros recebidos na request

        if (name == undefined && user != undefined) {
            const usos = UsoModel.find({});
            return res.send(usos);
        }
        if (name != undefined && user == undefined) {
            const usos = registroModel.find({name});
            return res.send(usos);
        }
    } catch (err) {
        return res.status(500).send({ error: 'Erro ao buscar usuario' });
    }
})

module.exports = router;