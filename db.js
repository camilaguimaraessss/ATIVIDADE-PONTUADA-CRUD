const { Sequelize } = require('sequelize');

// CONFIGURE AQUI:
// 1. Nome do Banco: 'PRODUTO'
// 2. Usuário: 'root' (o usuário administrador)
// 3. Senha: '' (uma string vazia, já que você não tem senha)
const sequelize = new Sequelize('PRODUTO', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Testar a conexão (opcional, mas recomendado)
async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco MySQL estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}
testarConexao();

module.exports = sequelize;