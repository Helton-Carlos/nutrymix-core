const users = require('./users.api');
const { getUsers, getUser } = require('../controller/users.controller');

const userProperties =  {
  id: { type: 'string'},
  name: { type: 'string'},
  cpf: { type: 'string'},
  email: { type: 'string'},
  phone: { type: 'number'},
  age: { type: 'number'},
  size: { type: 'number'},
  height:{ type: 'number'},
  pressure: { type: 'number'},
  diet: { type: 'string'},
}

const getUsersOption = {
  schema: {
    response: {
      200: {
        type: 'array',
        users: {
          type: 'object',
          properties: userProperties
        }
      }
    }
  },
  handler: getUsers
}

const getUserOption = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: userProperties
      }
    }
  },
  handler: getUser
}


function usersRoutes(fastify, options, done) {
  fastify.get('/users', getUsersOption);
  
  fastify.get('/users/:id', getUserOption);  
  
  done();
}

module.exports = usersRoutes;