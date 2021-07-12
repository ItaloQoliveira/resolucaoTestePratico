var express = require('express');
var mongoose = require('mongoose');
var bdurl = 'mongodb+srv://admin:admin54012@clusterapi.7jaeg.mongodb.net/Ingredientes?retryWrites=true&w=majority' //chave de conexão para o banco que não deveria de forma alguma estar aqui
const options = { useUnifiedTopology: true , poolSize: 5, useNewUrlParser: true,useCreateIndex: true};
mongoose.connect(bdurl,options); // Conexão com o banco de dados

//verificação de conexao com banco de dados
mongoose.connection.on('error', (err) =>{
    console.log(`Erro na conexão com o banco de dados: ${err} `);
}) 

mongoose.connection.on('connected',() =>{
    console.log("Conectado com sucesso ao banco de dados");
})

mongoose.connection.on('disconnected',() =>{
    console.log("aplicação desconectada do banco de dados");
})
 //criando o app
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//rotas do banco de daods
const idRota = require('./routes/id');
const rawMaterialsRota = require('./routes/rawMaterials')
app.use('/id',idRota);
app.use('/rawMaterials',rawMaterialsRota);



 
app.listen(3000);