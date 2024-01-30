const users = require('./users.api');

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
  }
}

const getUserOption = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: userProperties
      }
    }
  }
}


function usersRoutes(fastify, options, done) {
  fastify.get('/users', getUsersOption, (req, res)=>{
    res.send(users)
  });
  
  fastify.get('/users/:id', getUserOption, (req, res)=>{
    const { id } = req.params;
    const user = users.find(user => user.id === Number(id));
  
    res.send(user);
  });  
  
  done();
}

module.exports = usersRoutes;