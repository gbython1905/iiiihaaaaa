const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('concessionaria','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
try{
    sequelize.authenticate()
    console.log('Conectado com sucesso')
}catch(err){
    console.log('Não foi possível conectar ao banco de dados', err)
}

module.exports = sequelize