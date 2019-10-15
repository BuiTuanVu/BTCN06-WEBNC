var express = require('express');
var router = express.Router();


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


const User = sequelize.define('user', {
  // attributes
  name: {
    type: Sequelize.STRING,

  },
  password: {
    type: Sequelize.STRING,
  }
}, {
  // options
});

const createUser = async ({ name, password }) => {
  return await User.create({ name, password });
};
// function lấy ra danh sách users
const Users = async () => {
  return await User.findAll();
};
// function lấy ra 1 users
const getUser = async obj => {
  return await User.findOne({
    where: obj,
  });
};


router.get('/', function (req, res) {
  Users().then(user => res.json(user))
});

router.post('/register', function (req, res, next) {
  const { name, password } = req.body;
  createUser({ name, password }).then(user =>
    res.json({ user, msg: 'account created successfully' })
  );
})


module.exports = router;
