const app = require('./app');

app.set('port',77777); //Escolha de uma porta padrão
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: " + server.address().port);
});
