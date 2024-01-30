// CommonJs
const fastify = require('fastify')({
    logger: false
  })

const port = 5005

fastify.get('/', (request, reply) => {
    reply.send("Servidor Rodando")
  })

  
fastify.listen(port, (err, address) => {
    if (err) throw err

    console.log(`Servidor Rodando ${address}`);
  }); 
  