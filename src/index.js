const Fastify = require('fastify');

const fastify = Fastify({
  logger: true
});

fastify.register(require('./routes/users.routes'))

const PORT = 3030;

fastify.listen({port: PORT}, (error, address) =>{
  if(error) {
    console.log(error);
    process.exit(1)
  }

  console.log(`Connect: ${ PORT }, ${ address }`);
})