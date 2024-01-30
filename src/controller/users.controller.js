const users = require('../routes/users.api');

const getUsers = (req, res) => {
  res.send(users)
}

const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === Number(id));

  res.send(user);
}

module.exports = {
  getUsers,
  getUser
}