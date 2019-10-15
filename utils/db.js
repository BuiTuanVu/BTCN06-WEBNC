const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'user_wnc',
    username: 'root',
    password: 'tuanvu2010',
    dialect: 'mysql',
});

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established'))
    .catch(err => console.error('Unable to connect to the data'));

module.exports = sequelize

module.exports = {
    createUser: async ({ name, password }) => {
        return await User.create({ name, password })
    },

    Users: async () => {
        return await User.findAll();
    },

    getUser: async obj => {
        return await User.findOne({ where: obj, });
    },
}