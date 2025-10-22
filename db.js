const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('PRODUTO', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3309,
    logging: false 
});

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log(' Conexão com o banco MySQL estabelecida com sucesso.');
    } catch (error) {
        console.error(' Erro ao conectar:', error.message);
    }
}
testarConexao();

module.exports = sequelize;