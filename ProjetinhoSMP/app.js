//Fazer a importação do express
const express = require('express');

//Rotas (quando o servidor dor acessado, pra onde ele vai???)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá Mundo!!!')
});

//Configurações basicas do aplicativo
const app = express();
app.use('/',router);

module.exports = app; //exportando o app, pois iremos importa-lo no
